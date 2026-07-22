 /* Multi-Page Navigation Engine */
        function navigateTo(pageId) {
            const pages = document.querySelectorAll('.page');
            pages.forEach(p => p.classList.remove('active-page'));

            const navLinks = document.querySelectorAll('nav a');
            navLinks.forEach(l => l.classList.remove('active'));

            document.getElementById('page-' + pageId).classList.add('active-page');
            
            const selectedAnchor = document.getElementById('nav-' + pageId);
            if(selectedAnchor) selectedAnchor.classList.add('active');

            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        /* Information Center Accordion Control */
        function toggleFaq(element) {
            const isOpen = element.classList.contains('open');
            
            // Close other FAQs for clean presentation
            document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('open'));
            
            // Toggle clicked item
            if (!isOpen) {
                element.classList.add('open');
            }
        }

        /* Arcade: Live Quiz Module */
        function runQuiz(element, isCorrect) {
            const opts = document.querySelectorAll('.quiz-option');
            opts.forEach(o => {
                o.className = 'quiz-option';
                o.disabled = true;
            });
            const fb = document.getElementById('quiz-feedback');
            if(isCorrect) {
                element.classList.add('correct');
                fb.textContent = "🎉 Correct! 'Neither' takes a singular verb form ('was').";
                fb.style.color = "#28a745";
            } else {
                element.classList.add('wrong');
                fb.textContent = "❌ Incorrect. Remember, 'Neither' acts singular contextually.";
                fb.style.color = "#dc3545";
            }
        }

        /* Arcade: Vocabulary Match Module */
        let clickCache = null;
        let counters = 2;

        function runMatch(btn) {
            if(btn.classList.contains('matched') || clickCache === btn) return;

            if(clickCache) {
                const t1 = clickCache.getAttribute('data-type');
                const t2 = btn.getAttribute('data-type');
                const id1 = clickCache.getAttribute('data-id');
                const id2 = btn.getAttribute('data-id');

                if(t1 !== t2 && id1 === id2) {
                    clickCache.classList.add('matched');
                    btn.classList.add('matched');
                    counters--;
                    document.getElementById('game-score').textContent = counters === 0 
                        ? "🎉 Amazing job! Everything cleared perfectly." 
                        : `Matches Remaining: ${counters}`;
                    clickCache = null;
                } else {
                    clickCache.classList.remove('selected');
                    btn.classList.add('selected');
                    clickCache = btn;
                }
            } else {
                btn.classList.add('selected');
                clickCache = btn;
            }
        }
    