
document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem = button.parentElement;

        // Cerrar otros contenedores abiertos
        document.querySelectorAll('.accordion-item').forEach(item => {
            if (item !== accordionItem) {
                item.classList.remove('active');
                item.querySelector('.accordion-content').style.display = 'none';
            }
        });

        // Alternar la visibilidad del contenedor actual
        const accordionContent = button.nextElementSibling;
        if (accordionItem.classList.contains('active')) {
            accordionItem.classList.remove('active');
            accordionContent.style.display = 'none';
        } else {
            accordionItem.classList.add('active');
            accordionContent.style.display = 'block';
        }
    });
});
