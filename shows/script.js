/* ── Weekly Shows – Shared Script ── */

document.addEventListener('DOMContentLoaded', () => {


    /* ── Copyright Year ── */
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* ── FAQ Accordion ── */
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            const wasOpen = item.classList.contains('open');
            // close all
            document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
            // toggle clicked
            if (!wasOpen) item.classList.add('open');
        });
    });

    /* ── Social Share ── */
    const pageUrl = encodeURIComponent(window.location.href);
    const pageTitle = encodeURIComponent(document.title);

    document.querySelectorAll('.share-btn[data-platform]').forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            const platform = btn.dataset.platform;
            let url = '';
            switch (platform) {
                case 'whatsapp':
                    url = `https://api.whatsapp.com/send?text=${pageTitle}%20${pageUrl}`;
                    break;
                case 'twitter':
                    url = `https://twitter.com/intent/tweet?text=${pageTitle}&url=${pageUrl}`;
                    break;
                case 'facebook':
                    url = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
                    break;
                case 'copy':
                    navigator.clipboard.writeText(window.location.href).then(() => {
                        const orig = btn.innerHTML;
                        btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg> Copied!';
                        setTimeout(() => { btn.innerHTML = orig }, 2000);
                    });
                    return;
            }
            if (url) window.open(url, '_blank', 'width=600,height=400,noopener');
        });
    });

    /* ── Scroll Reveal ── */
    const revealEls = document.querySelectorAll('.reveal');
    if (revealEls.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        revealEls.forEach(el => observer.observe(el));
    }

    function getLastWeekdayFormatted(targetDay) {
        const today = new Date();
        const day = today.getDay();

        const diff = (day >= targetDay)
            ? day - targetDay
            : 7 - (targetDay - day);

        const lastDay = new Date(today);
        lastDay.setDate(today.getDate() - diff);

        const yyyy = lastDay.getFullYear();
        const mm = String(lastDay.getMonth() + 1).padStart(2, '0');
        const dd = String(lastDay.getDate()).padStart(2, '0');

        return `${yyyy}-${mm}-${dd}`;
    }

    const nxtDate = getLastWeekdayFormatted(2);
    const link1 = document.getElementById("nxtLink");
    if (link1) {
        link1.href = `https://www.wwe.com/shows/wwenxt/${nxtDate}`;
        link1.innerText = `Latest NXT Results (${nxtDate}) →`;
    }

    const rawDate = getLastWeekdayFormatted(1);
    const link2 = document.getElementById("rawLink");
    if (link2) {
        link2.href = `https://www.wwe.com/shows/raw/${rawDate}/results`;
        link2.innerText = `Latest Raw Results (${rawDate}) →`;
    }

    const smackdownDate = getLastWeekdayFormatted(5);
    const link = document.getElementById("smackdownLink");
    if (link) {
        link.href = `https://www.wwe.com/shows/smackdown/${smackdownDate}`;
        link.innerText = `Latest SmackDown Results (${smackdownDate}) →`;
    }


});     