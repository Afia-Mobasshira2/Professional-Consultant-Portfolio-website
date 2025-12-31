const menu = document.querySelector('#mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    // Toggle the "active" class on click
    menu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Change icon from 'bars' to 'times' (X)
        const icon = menu.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menu.querySelector('i').classList.add('fa-bars');
            menu.querySelector('i').classList.remove('fa-times');
        });
    });