/*
	Eventually by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function() {

	"use strict";

	var	$body = document.querySelector('body');

	// Methods/polyfills.

		// classList | (c) @remy | github.com/remy/polyfills | rem.mit-license.org
			!function(){function t(t){this.el=t;for(var n=t.className.replace(/^\s+|\s+$/g,"").split(/\s+/),i=0;i<n.length;i++)e.call(this,n[i])}function n(t,n,i){Object.defineProperty?Object.defineProperty(t,n,{get:i}):t.__defineGetter__(n,i)}if(!("undefined"==typeof window.Element||"classList"in document.documentElement)){var i=Array.prototype,e=i.push,s=i.splice,o=i.join;t.prototype={add:function(t){this.contains(t)||(e.call(this,t),this.el.className=this.toString())},contains:function(t){return-1!=this.el.className.indexOf(t)},item:function(t){return this[t]||null},remove:function(t){if(this.contains(t)){for(var n=0;n<this.length&&this[n]!=t;n++);s.call(this,n,1),this.el.className=this.toString()}},toString:function(){return o.call(this," ")},toggle:function(t){return this.contains(t)?this.remove(t):this.add(t),this.contains(t)}},window.DOMTokenList=t,n(Element.prototype,"classList",function(){return new t(this)})}}();

		// canUse
			window.canUse=function(p){if(!window._canUse)window._canUse=document.createElement("div");var e=window._canUse.style,up=p.charAt(0).toUpperCase()+p.slice(1);return p in e||"Moz"+up in e||"Webkit"+up in e||"O"+up in e||"ms"+up in e};

		// window.addEventListener
			(function(){if("addEventListener"in window)return;window.addEventListener=function(type,f){window.attachEvent("on"+type,f)}})();

	// Play initial animations on page load.
		window.addEventListener('load', function() {
			window.setTimeout(function() {
				$body.classList.remove('is-preload');
			}, 100);
		});

	// Slideshow Background.
		(function() {

			// Settings.
				var settings = {

					// Images (in the format of 'url': 'alignment').
						images: {
							'images/banner.png': 'center',
						},

					// Delay.
						delay: 6000

				};

			// Vars.
				var	pos = 0, lastPos = 0,
					$wrapper, $bgs = [], $bg,
					k, v;

			// Create BG wrapper, BGs.
				$wrapper = document.createElement('div');
					$wrapper.id = 'bg';
					$body.appendChild($wrapper);

				for (k in settings.images) {

					// Create BG.
						$bg = document.createElement('div');
							$bg.style.backgroundImage = 'url("' + k + '")';
							$bg.style.backgroundPosition = settings.images[k];
							$wrapper.appendChild($bg);

					// Add it to array.
						$bgs.push($bg);

				}

			// Main loop.
				$bgs[pos].classList.add('visible');
				$bgs[pos].classList.add('top');

				// Bail if we only have a single BG or the client doesn't support transitions.
					if ($bgs.length == 1
					||	!canUse('transition'))
						return;

				window.setInterval(function() {

					lastPos = pos;
					pos++;

					// Wrap to beginning if necessary.
						if (pos >= $bgs.length)
							pos = 0;

					// Swap top images.
						$bgs[lastPos].classList.remove('top');
						$bgs[pos].classList.add('visible');
						$bgs[pos].classList.add('top');

					// Hide last image after a short delay.
						window.setTimeout(function() {
							$bgs[lastPos].classList.remove('visible');
						}, settings.delay / 2);

				}, settings.delay);

		})();

	

})();


 const tracks = [
            {
                id: '2o4JQse7Okw?si=bA9WU2RWzL83VlrR',
                title: 'Breath is just a memory',
                description: 'This is a teaser for the Breath is just a memory. It will be available on my channel today at 6 PM CEST.',
                duration: '2:40',
                genre: 'Dubstep, Growling',
                thumbnail: 'https://i.ytimg.com/vi/Hq1vDKZpllY/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGH8gQigfMA8=&rs=AOn4CLA2_SbLT3kYcQXCbTVWaCiihpUU2Q'
            },
            {
                id: 'nlwEPpWVKv4?si=t9MlX73kzM4UKmFV',
                title: 'Feel like this',
                description: 'Heavy basslines meet ethereal melodies in this high-energy electronic composition.',
                duration: '3:43',
                genre: 'Future Dubstep',
                thumbnail: 'https://i.ytimg.com/vi/nlwEPpWVKv4/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGEogQChyMA8=&rs=AOn4CLDvljCJaN6MRXgxnQXQoiP8OJeA-Q'
            },
            {
                id: 'W-T2YoqrBf0?si=82FlSY7V_Qg15PDL', 
                title: 'Shadows Collide',
                description: 'Cinematic builds and emotional breakdowns create an immersive listening experience.',
                duration: '2:59',
                genre: 'Future dubstep',
                thumbnail: 'https://i.ytimg.com/vi/W-T2YoqrBf0/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGDEgMyh_MA8=&rs=AOn4CLAkTBHDKmG6g815vS6oR03B37Oetg'
            }
        ];

        function renderTracks() {
            const grid = document.getElementById('musicGrid');
            
            grid.innerHTML = tracks.map((track, index) => `
                <div class="track-card" style="animation-delay: ${index * 0.1}s;">
                    <div class="video-container">
                        <img src="${track.thumbnail}" alt="${track.title}" class="video-thumbnail">
                        <div class="play-button" onclick="playVideo('${track.id}')">
                            <div class="play-icon"></div>
                        </div>
                    </div>
                    <div class="track-info">
                        <h3 class="track-title">${track.title}</h3>
                        <div class="track-meta">
                            <span class="track-genre">${track.genre}</span>
                            <span class="track-duration">${track.duration}</span>
                        </div>
                        <p class="track-description">${track.description}</p>
                        <div class="track-actions">
                            <a href="https://www.youtube.com/watch?v=${track.id}" target="_blank" class="btn btn-primary">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M8 5v14l11-7z"/>
                                </svg>
                                Watch on YouTube
                            </a>
                            <button class="btn btn-secondary" onclick="playVideo('${track.id}')">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                                </svg>
                                Play Now
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        function playVideo(videoId) {
            const modal = document.getElementById('videoModal');
            const modalVideo = document.getElementById('modalVideo');
            
            modalVideo.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            const modal = document.getElementById('videoModal');
            const modalVideo = document.getElementById('modalVideo');
            
            modal.classList.remove('active');
            modalVideo.src = '';
            document.body.style.overflow = 'auto';
        }

        // Close modal on outside click
        document.getElementById('videoModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });

        // Animate view counter
        function animateViewCounter() {
            const viewsElement = document.getElementById('totalViews');
            const targetViews = 2847; // Example view count
            let currentViews = 802;
            const increment = targetViews / 60;
            
            const counter = setInterval(() => {
                currentViews += increment;
                if (currentViews >= targetViews) {
                    currentViews = targetViews;
                    clearInterval(counter);
                }
                viewsElement.textContent = Math.floor(currentViews).toLocaleString();
            }, 25);
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            renderTracks();
            
            // Start counter animation when stats section is visible
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateViewCounter();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            const statsSection = document.querySelector('.stats-section');
            if (statsSection) {
                observer.observe(statsSection);
            }
        });
