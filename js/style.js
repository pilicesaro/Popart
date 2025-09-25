document.addEventListener("DOMContentLoaded", () => {
    const carouselImages = document.getElementById("carousel-images");
    const leftArrow = document.getElementById("left-arrow");
    const rightArrow = document.getElementById("right-arrow");

    // Ancho de desplazamiento
    const scrollAmount = 220; // Ajusta según el ancho de las imágenes y el gap

    // Duplicar las imágenes para crear el efecto infinito
    const images = Array.from(carouselImages.children);
    images.forEach((image) => {
        const clone = image.cloneNode(true);
        carouselImages.appendChild(clone);
    });

    // Ajustar el scroll inicial para que comience en el medio (donde están las imágenes duplicadas)
    carouselImages.scrollLeft = carouselImages.scrollWidth / 2;

    // Evento para mover a la izquierda
    leftArrow.addEventListener("click", () => {
        if (carouselImages.scrollLeft <= 0) {
            carouselImages.scrollLeft = carouselImages.scrollWidth / 2;
        }
        carouselImages.scrollBy({
            left: -scrollAmount,
            behavior: "smooth",
        });
    });

    // Evento para mover a la derecha
    rightArrow.addEventListener("click", () => {
        if (
            carouselImages.scrollLeft + carouselImages.offsetWidth >=
            carouselImages.scrollWidth
        ) {
            carouselImages.scrollLeft = carouselImages.scrollWidth / 2 - carouselImages.offsetWidth;
        }
        carouselImages.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
        });
    });
});

/*-----------------------------------------------------------------------------------------------------------------*/

// Lógica para el Modal del Carrusel en el Index
document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.getElementById('carousel-images');
    const modal = document.getElementById('carousel-modal');

    // Solo ejecutar si estamos en una página con el carrusel y su modal
    if (carouselContainer && modal) {
        const modalImg = modal.querySelector('#modal-image');
        const modalTitle = modal.querySelector('#modal-title');
        const modalDescription = modal.querySelector('#modal-description');
        const closeButton = modal.querySelector('.close-button');

        carouselContainer.addEventListener('click', (e) => {
            if (e.target.tagName === 'IMG') {
                const img = e.target;
                // Llenar el modal con la información del item
                modalImg.src = img.src;
                modalTitle.textContent = img.dataset.title;
                modalDescription.textContent = img.dataset.description;
                
                // Mostrar el modal
                modal.style.display = 'flex';
            }
        });

        // Función para cerrar el modal
        const closeModal = () => {
            modal.style.display = 'none';
        };


        // Cerrar al hacer clic en el botón de cerrar
        closeButton.addEventListener('click', closeModal);

        // Cerrar al hacer clic fuera del contenido del modal
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const answers = {
        question1: 'andy',
        question2: 'ambos',
        question3: '1950s',
        question4: 'puntos',
        question5: 'keith',
        question6: 'ambos',
        question7: 'vibrantes',
    };

    const quizCards = document.querySelectorAll('.quiz-card');
    const feedback = document.getElementById('quiz-feedback');
    let currentQuestionIndex = 0;

    function showFeedback(isCorrect) {
        feedback.style.display = 'block';
        feedback.textContent = isCorrect ? '¡Correcto!' : 'Incorrecto, intenta de nuevo.';
        feedback.style.color = isCorrect ? 'green' : 'red';
    }

    function showNextCard() {
        feedback.style.display = 'none';
        quizCards[currentQuestionIndex].style.display = 'none'; // Oculta la tarjeta actual
        currentQuestionIndex++;
        if (currentQuestionIndex < quizCards.length) {
            quizCards[currentQuestionIndex].style.display = 'block'; // Muestra la siguiente tarjeta
        } else {
            feedback.textContent = '¡Has completado el cuestionario con exito!';
            feedback.style.color = 'verde';
            feedback.style.display = 'block';
        }
    }

    quizCards.forEach((card, index) => {
        const button = card.querySelector('.submit-answer');
        const select = card.querySelector('select');

        if (index !== 0) {
            card.style.display = 'none'; // Oculta todas las tarjetas excepto la primera
        }

        button.addEventListener('click', () => {
            const selectedAnswer = select.value;
            const questionId = `question${index + 1}`;
            if (selectedAnswer === answers[questionId]) {
                showFeedback(true);
                setTimeout(showNextCard, 1000); // Muestra la siguiente tarjeta después de 1 segundo
            } else {
                showFeedback(false);
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.fun-fact-card'); // Selecciona todas las tarjetas
    const prevButton = document.querySelector('.carousel-prev'); // Botón de navegación izquierda
    const nextButton = document.querySelector('.carousel-next'); // Botón de navegación derecha
    let slideIndex = 0; // Índice inicial

    // Función para mostrar la tarjeta activa
    function showSlide(index) {
        // Asegúrate de que el índice esté dentro del rango
        if (index >= slides.length) {
            slideIndex = 0; // Reinicia al primer slide si el índice supera el número de slides
        } else if (index < 0) {
            slideIndex = slides.length - 1; // Vuelve al último slide si el índice es menor que 0
        }

        // Oculta todas las tarjetas
        slides.forEach(slide => {
            slide.style.display = 'none';
        });

        // Muestra solo la tarjeta activa
        slides[slideIndex].style.display = 'block';
    }

    // Evento para el botón "Anterior"
    prevButton.addEventListener('click', () => {
        slideIndex--; // Mueve al slide anterior
        showSlide(slideIndex);
    });

    // Evento para el botón "Siguiente"
    nextButton.addEventListener('click', () => {
        slideIndex++; // Mueve al siguiente slide
        showSlide(slideIndex);
    });

    // Inicializa el carrusel mostrando la primera tarjeta
    showSlide(slideIndex);
});

/*-----------------------------------------------------------------------------------------------------------------*/

document.addEventListener('DOMContentLoaded', () => {
    const events = document.querySelectorAll('.timeline-event');

    events.forEach(event => {
        event.addEventListener('click', () => {
            // Cierra cualquier evento abierto previamente
            events.forEach(e => {
                if (e !== event && e.classList.contains('active')) {
                    e.classList.remove('active');
                }
            });
            // Alterna la clase 'active' en el evento clicado
            event.classList.toggle('active');
        });
    });
});

/*-----------------------------------------------------------------------------------------------------------------*/

document.addEventListener('DOMContentLoaded', () => {
    const milestones = document.querySelectorAll('.milestone-item');

    milestones.forEach(milestone => {
        milestone.addEventListener('click', () => {
            // Cierra cualquier otro hito que esté activo
            milestones.forEach(item => {
                if (item !== milestone) item.classList.remove('active');
            });
            // Alterna la clase 'active' en el hito clickeado
            milestone.classList.toggle('active');
        });
    });
});


/*-----------------------------------------------------------------------------------------------------------------*/

document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.works-toggle-btn');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const worksContainer = button.closest('.artist-profile').querySelector('.artist-works');
            const isVisible = worksContainer.classList.contains('visible');

            if (isVisible) {
                worksContainer.classList.remove('visible');
                button.textContent = 'Ver obras';
            } else {
                worksContainer.classList.add('visible');
                button.textContent = 'Ocultar obras';
            }
        });
    });
});


// Lógica para el buscador de artistas y galería
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('artist-search') || document.getElementById('gallery-search'); // Busca el input según la página
    const artistProfiles = document.querySelectorAll('.artist-profile'); // Perfiles de artistas
    const galleryItems = document.querySelectorAll('.gallery-item'); // Elementos de la galería

    if (searchInput) { // Asegúrate de que el buscador exista en la página actual
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();

            // Filtrar artistas si están presentes
            if (artistProfiles.length > 0) {
                artistProfiles.forEach(profile => {
                    const artistName = profile.querySelector('h2').textContent.toLowerCase();
                    const artistBio = profile.querySelector('p').textContent.toLowerCase();

                    // Si el nombre o la biografía incluyen el término de búsqueda, se muestra el perfil. Si no, se oculta.
                    const isVisible = artistName.includes(searchTerm) || artistBio.includes(searchTerm);
                    profile.style.display = isVisible ? 'block' : 'none';
                });
            }

            // Filtrar elementos de la galería si están presentes
            if (galleryItems.length > 0) {
                galleryItems.forEach(item => {
                    const title = item.dataset.title.toLowerCase();
                    const description = item.dataset.description.toLowerCase();

                    // Si el título o la descripción incluyen el término de búsqueda, se muestra el elemento. Si no, se oculta.
                    const isVisible = title.includes(searchTerm) || description.includes(searchTerm);
                    item.style.display = isVisible ? 'block' : 'none';
                });
            }
        });
    }
});


/*-----------------------------------------------------------------------------------------------------------------*/

// Lógica para la página de Pop Art en Latinoamérica
document.addEventListener('DOMContentLoaded', () => {
    // Interacción para obras destacadas
    const featuredWorks = document.querySelectorAll('.featured-work-item');
    featuredWorks.forEach(item => {
        item.addEventListener('click', () => {
            // Cierra cualquier otro hito que esté activo
            featuredWorks.forEach(otherItem => {
                if (otherItem !== item) otherItem.classList.remove('active');
            });
            item.classList.toggle('active');
        });
    });

    // Lógica del mapa interactivo
    const mapHotspots = document.querySelectorAll('.map-hotspot');
    const infoBox = document.getElementById('map-info-box');

    if (mapHotspots.length > 0 && infoBox) {
        const countryData = {
            ar: [
                { artist: 'Marta Minujín', work: 'Sin Título (Serie Marilyn)', img: 'imagenes/marta-minujin.jpg', description: 'Una instalación laberíntica que invitaba al espectador a recorrer diferentes situaciones cotidianas, satirizando la cultura de masas.' },
                { artist: 'Antonio Berni', work: 'La Ramona Montiel', img: 'imagenes/berni-ramona.jpg', description: 'Serie de collages y grabados que narran la vida de un personaje ficticio, criticando la sociedad desde una perspectiva popular.' }
            ],
            br: [
                { artist: 'Antonio Dias', work: 'O País Inventado (1976)', img: 'imagenes/antonio-dias.jpg', description: 'Exploró las tensiones políticas de Brasil durante la dictadura militar, con un estilo que rozaba el pop y el arte conceptual.' },
                { artist: 'Hélio Oiticica', work: 'Parangolés', img: 'imagenes/oiticica.jpg', description: 'Capas y estandartes para ser vestidas por el espectador, fusionando arte, cuerpo y vida cotidiana.' }
            ],
            co: [
                { artist: 'Nadin Ospina', work: 'El Pensador (1997)', img: 'imagenes/nadia-ospina.jpg', description: 'Mezcla figuras precolombinas con personajes de la cultura pop como Mickey Mouse, creando un comentario irónico sobre la globalización.' }
            ],
            mx: [
                { artist: 'Felipe Ehrenberg', work: 'La caída (1968)', img: 'imagenes/felipe-ehrenberg-obra.jpg', description: 'Utilizó el pop para comentar sobre eventos políticos como la masacre de Tlatelolco, mezclando iconografía popular con denuncia social.' }
            ],
            cl: [
                { artist: 'Hugo Marín', work: 'Esculturas', img: 'imagenes/hugo-marin.jpg', description: 'Aunque más cercano al surrealismo, su uso de colores y formas tuvo un diálogo con la estética pop, explorando la mitología y lo terrenal.' }
            ],
            pe: [
                { artist: 'Teresa Burga', work: 'Propuestas', img: 'imagenes/teresa-burga.jpg', description: 'Pionera del arte conceptual en Perú, su obra de los 60 y 70 utilizó un lenguaje visual pop para analizar y desglosar objetos y estructuras sociales.' }
            ]
        };

        mapHotspots.forEach(hotspot => {
            hotspot.addEventListener('click', () => {
                mapHotspots.forEach(h => h.classList.remove('active'));
                hotspot.classList.add('active');

                const countryId = hotspot.dataset.country;
                const works = countryData[countryId];

                infoBox.innerHTML = ''; // Limpiar el contenido anterior

                if (works && works.length > 0) {
                    works.forEach(work => {
                        const workElement = `
                            <div class="map-work-item">
                                <img src="${work.img}" alt="${work.work}" class="map-work-img">
                                <div class="map-work-details">
                                    <h4>${work.artist} - "${work.work}"</h4>
                                    <p>${work.description}</p>
                                </div>
                            </div>
                        `;
                        infoBox.innerHTML += workElement;
                    });
                } else {
                    infoBox.innerHTML = '<div id="map-info-initial"><p>No hay información disponible para este país.</p></div>';
                }
            });
        });
    }
});

/*-----------------------------------------------------------------------------------------------------------------*/

// Lógica para la sección de artistas de Latinoamérica
document.addEventListener('DOMContentLoaded', () => {
    const artistListItems = document.querySelectorAll('.artist-list li');
    const detailsContent = document.getElementById('artist-details-content');

    if (artistListItems.length > 0 && detailsContent) {
        const artistsData = {
            minujin: {
                name: 'Marta Minujín',
                country: 'Argentina',
                bio: 'Artista conceptual y de performance, pionera del pop en Argentina. Su obra es conocida por ser monumental, participativa y efímera, utilizando colores vibrantes y desafiando al espectador a interactuar con el arte.',
                img: 'imagenes/marta-minujin.jpg',
                works: 'La Menesunda (1965), El Partenón de Libros (1983), El Obelisco Acostado (1978).'
            },
            gonzalez: {
                name: 'Beatriz González',
                country: 'Colombia',
                bio: 'Pintora y crítica de arte, su trabajo se apropia de imágenes de la prensa y la historia del arte para comentar sobre la realidad social y política de Colombia. Utiliza colores planos y un estilo gráfico para reinterpretar la cultura popular.',
                img: 'imagenes/beatriz_gonzalez.jpg',
                works: 'Los Suicidas del Sisga (1965), Telón de la móvil y cambiante naturaleza (1978).'
            },
            dias: {
                name: 'Antonio Dias',
                country: 'Brasil',
                bio: 'Artista multimedia cuyo trabajo abarcó la pintura, el cine y la instalación. Su obra de los años 60, con una fuerte carga política, utilizó una estética pop para criticar la dictadura militar en Brasil.',
                img: 'imagenes/antonio.jpg',
                works: 'O País Inventado (1976), Nota sobre a Morte Imprevista (1965).'
            },
            ospina: {
                name: 'Nadin Ospina',
                country: 'Colombia',
                bio: 'Conocido por sus esculturas y ensamblajes que fusionan la iconografía precolombina con personajes de la cultura de masas global, como Mickey Mouse o Los Simpson. Su obra es una reflexión irónica sobre la identidad, el colonialismo y la globalización.',
                img: 'imagenes/nadin.jpeg',
                works: 'El Pensador (1997), San Sebastián (1997), Ídolos con Calavera (1998).'
            },
            berni: {
                name: 'Antonio Berni',
                country: 'Argentina',
                bio: 'Figura clave del arte argentino, Berni transitó del realismo social a un "nuevo realismo" con influencias pop. Creó personajes icónicos como Juanito Laguna y Ramona Montiel, utilizando collages con materiales de desecho para denunciar la pobreza y la marginalidad.',
                img: 'imagenes/antonio_berni.jpg',
                works: 'Juanito Laguna (serie), Ramona Montiel (serie), La manifestación (1934).'
            },
            oiticica: {
                name: 'Hélio Oiticica',
                country: 'Brasil',
                bio: 'Artista fundamental del movimiento neoconcreto brasileño. Su obra evolucionó hacia la participación del espectador, creando los "Parangolés", capas y estructuras que fusionan color, cuerpo y espacio, llevando el arte más allá del objeto estático.',
                img: 'imagenes/helio.jpg',
                works: 'Parangolés (serie), Bólides, Tropicália (instalación).'
            },
            ehrenberg: {
                name: 'Felipe Ehrenberg',
                country: 'México',
                bio: 'Artista pionero y figura clave del arte conceptual en México. Su trabajo, a menudo con un fuerte componente político, utilizó medios no tradicionales y una estética cercana al pop para comentar sobre eventos sociales y la vida cotidiana.',
                img: 'imagenes/felipe.avif',
                works: 'La caída (1968), Arte Correo, Acontecimientos.'
            }
        };

        const displayArtistInfo = (artistId) => {
            const artist = artistsData[artistId];
            if (!artist) return;

            detailsContent.innerHTML = `
                <img src="${artist.img}" alt="${artist.name}" class="artist-details-img">
                <div class="artist-details-text">
                    <h3>${artist.name} <span>(${artist.country})</span></h3>
                    <p>${artist.bio}</p>
                    <div class="artist-details-works">
                        <h4>Obras Importantes:</h4>
                        <p>${artist.works}</p>
                    </div>
                </div>
            `;
        };

        artistListItems.forEach(item => {
            item.addEventListener('click', () => {
                artistListItems.forEach(li => li.classList.remove('active'));
                item.classList.add('active');
                const artistId = item.dataset.artist;
                displayArtistInfo(artistId);
            });
        });

        // Cargar el primer artista por defecto
        displayArtistInfo('minujin');
    }
});

/*-----------------------------------------------------------------------------------------------------------------*/

// Lógica para el Modal de la Galería en galeria.html
document.addEventListener('DOMContentLoaded', () => {
    const galleryGrid = document.querySelector('.gallery-grid');
    const modal = document.getElementById('gallery-modal');

    // Solo ejecutar si estamos en la página de la galería con su modal
    if (galleryGrid && modal) {
        const modalImg = modal.querySelector('#modal-img');
        const modalTitle = modal.querySelector('#modal-title');
        const modalDescription = modal.querySelector('#modal-description');
        const closeButton = modal.querySelector('.close-button');

        galleryGrid.addEventListener('click', (e) => {
            const galleryItem = e.target.closest('.gallery-item');
            if (galleryItem) {
                const img = galleryItem.querySelector('img');
                // Llenar el modal con la información del item
                modalImg.src = img.src;
                modalTitle.textContent = galleryItem.dataset.title;
                modalDescription.textContent = galleryItem.dataset.description;
                
                // Mostrar el modal
                modal.style.display = 'flex';
            }
        });

        // Función para cerrar el modal
        const closeModal = () => {
            modal.style.display = 'none';
        };

        // Cerrar al hacer clic en el botón de cerrar
        closeButton.addEventListener('click', closeModal);
    }
});
