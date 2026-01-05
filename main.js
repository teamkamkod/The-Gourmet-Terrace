document.addEventListener('DOMContentLoaded', () => {
    // 1. Preloader
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
            document.body.classList.remove('loading');
        }, 500);
    });

    // 2. Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Simple hamburger animation toggle
        hamburger.classList.toggle('toggle');
    });

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // 3. Translations (ENG / TH)
    const langBtn = document.getElementById('lang-toggle');
    const langText = document.getElementById('lang-text');
    const langFlag = document.getElementById('lang-flag');
    
    let currentLang = 'en';

    const translations = {
        en: {
            nav_home: "Home",
            nav_about: "About",
            nav_menu: "Menu",
            nav_reserve: "Book a Table",
            nav_contact: "Contact",
            hero_title: "The Gourmet Terrace",
            hero_tagline: "Elevate Your Senses on Our Sunset Terrace in Bo Put",
            btn_book: "Book Now",
            btn_menu: "View Menu",
            about_sub: "Our Story",
            about_heading: "Authentic Flavors, Ocean Breeze",
            about_intro: "Discover authentic Thai flavors and fresh seafood amid breathtaking Koh Samui views.",
            about_body: "Nestled in Bo Put, Koh Samui, The Gourmet Terrace blends authentic Thai mastery with Western delights, crafted from daily fresh fish market seafood. Savor zesty green curry, succulent steaks, and flavorful pad thai in our warm, family-style haven. Join us for sunset dinners where ocean breezes, attentive service, and genuine hospitality create unforgettable moments.",
            feat_seafood: "Fresh Seafood",
            feat_veg: "Vegetarian Options",
            feat_cocktail: "Sunset Cocktails",
            menu_sub: "Discover",
            menu_heading: "Our Menu Favorites",
            menu_padthai: "Classic stir-fried rice noodles with tamarind sauce, egg, tofu, and peanuts.",
            menu_curry: "Zesty and spicy coconut milk curry with Thai basil and fresh vegetables.",
            menu_laab: "Spicy minced chicken salad with mint, lime, and roasted rice powder.",
            menu_springrolls: "Crispy homemade rolls served with sweet chili sauce.",
            menu_prawns: "Daily fresh prawns grilled to perfection with seafood sauce.",
            menu_steak: "Tender beef steak served with sides and pepper sauce.",
            menu_basil: "Crispy chicken stir-fried with holy basil and chili.",
            menu_cocktail: "Refreshing tropical blends perfect for the evening view.",
            menu_shake: "Mango, Watermelon, or Pineapple blended with ice.",
            menu_beer: "Ice cold local beers.",
            res_sub: "Book a Table",
            res_heading: "Reservation",
            res_desc: "Reserve your spot for a perfect sunset dinner.",
            form_time: "Select Time",
            btn_submit: "Confirm Booking",
            rev_sub: "Testimonials",
            rev_heading: "What Our Guests Say",
            contact_heading: "Contact Us",
            contact_addr: "Address",
            contact_phone: "Phone",
            contact_hours: "Opening Hours"
        },
        th: {
            nav_home: "หน้าหลัก",
            nav_about: "เกี่ยวกับเรา",
            nav_menu: "เมนู",
            nav_reserve: "จองโต๊ะ",
            nav_contact: "ติดต่อ",
            hero_title: "The Gourmet Terrace",
            hero_tagline: "เติมเต็มประสบการณ์สัมผัสของคุณบนระเบียงชมพระอาทิตย์ตกที่บ่อผุด",
            btn_book: "จองโต๊ะ",
            btn_menu: "ดูเมนู",
            about_sub: "เรื่องราวของเรา",
            about_heading: "รสชาติแท้จริง สายลมแห่งท้องทะเล",
            about_intro: "สัมผัสรสชาติไทยแท้และอาหารทะเลสดใหม่ พร้อมวิวเกาะสมุยที่งดงามจับใจ",
            about_body: "ตั้งอยู่ใจกลางบ่อผุด เกาะสมุย เดอะ กูร์เมต์ เทอเรส ผสมผสานความชำนาญอาหารไทยแท้กับเมนูตะวันตกที่ปรุงจากวัตถุดิบทะเลสดใหม่จากตลาดทุกวัน ลิ้มลองแกงเขียวหวานรสจัดจ้าน สเต็กเนื้อนุ่มฉ่ำ และผัดไทยรสกลมกล่อมในบรรยากาศอบอุ่นเหมือนครอบครัว เจ้าของร้านเป็นมิตรใส่ใจทุกรายละเอียดด้วยซอสสูตรลับรสเข้มข้น ค็อกเทลราคาสบายกระเป๋าช่วยเติมเต็มบรรยากาศเขตร้อน",
            feat_seafood: "อาหารทะเลสดใหม่",
            feat_veg: "เมนูมังสวิรัติ",
            feat_cocktail: "ค็อกเทลยามเย็น",
            menu_sub: "ค้นพบ",
            menu_heading: "เมนูแนะนำ",
            menu_padthai: "ผัดไทยเส้นเหนียวนุ่ม ซอสมะขามรสกลมกล่อม",
            menu_curry: "แกงเขียวหวานรสจัดจ้าน หอมเครื่องแกงและกะทิสด",
            menu_laab: "ลาบไก่รสเด็ด หอมข้าวคั่ว มะนาว และสะระแหน่",
            menu_springrolls: "เปาะเปี๊ยะทอดกรอบ ไส้แน่น เสิร์ฟพร้อมน้ำจิ้มบ๊วย",
            menu_prawns: "กุ้งสดใหม่จากทะเล ย่างหอมๆ พร้อมน้ำจิ้มซีฟู้ด",
            menu_steak: "สเต็กเนื้อนุ่มฉ่ำ เสิร์ฟพร้อมซอสพริกไทยดำ",
            menu_basil: "กระเพราไก่กรอบ รสจัดจ้าน หอมใบกระเพรา",
            menu_cocktail: "เครื่องดื่มค็อกเทลสดชื่น เข้ากับบรรยากาศ",
            menu_shake: "น้ำผลไม้ปั่น มะม่วง แตงโม หรือสับปะรด",
            menu_beer: "เบียร์เย็นเจี๊ยบ",
            res_sub: "จองโต๊ะ",
            res_heading: "สำรองที่นั่ง",
            res_desc: "จองที่นั่งสำหรับดินเนอร์ยามพระอาทิตย์ตก",
            form_time: "เลือกเวลา",
            btn_submit: "ยืนยันการจอง",
            rev_sub: "รีวิวลูกค้า",
            rev_heading: "เสียงจากลูกค้าของเรา",
            contact_heading: "ติดต่อเรา",
            contact_addr: "ที่อยู่",
            contact_phone: "โทรศัพท์",
            contact_hours: "เวลาทำการ"
        }
    };

    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'th' : 'en';
        
        // Update Flag and Text
        if(currentLang === 'en') {
            langText.textContent = 'TH'; // Next option
            langFlag.src = 'https://flagcdn.com/w20/th.png';
        } else {
            langText.textContent = 'EN'; // Next option
            langFlag.src = 'https://flagcdn.com/w20/gb.png';
        }

        // Update Text Content
        document.querySelectorAll('[data-key]').forEach(elem => {
            const key = elem.getAttribute('data-key');
            if(translations[currentLang][key]) {
                elem.textContent = translations[currentLang][key];
            }
        });
    });

    // 4. Menu Tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const menuCats = document.querySelectorAll('.menu-category');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class
            tabBtns.forEach(b => b.classList.remove('active'));
            menuCats.forEach(c => c.classList.remove('active'));

            // Add active class
            btn.classList.add('active');
            const catId = btn.getAttribute('data-category');
            document.getElementById(catId).classList.add('active');
        });
    });

    // 5. Scroll Animations (Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-up, .fade-left, .fade-right').forEach(el => {
        observer.observe(el);
    });

    // 6. Reservation Form Submission
    const form = document.getElementById('booking-form');
    const msgDiv = document.getElementById('form-message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const btn = form.querySelector('button');
        const originalText = btn.textContent;
        btn.textContent = 'Sending...';
        btn.disabled = true;

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // Add GID
        data.GID = "ChIJE5HmAfDxVDAR_geVQzWamxY";

        fetch('https://hook.eu1.make.com/9zmguwti3y7qg2nd59x21s579xqr9f4s', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok) {
                msgDiv.style.color = 'var(--primary)';
                msgDiv.textContent = currentLang === 'en' ? "Reservation Sent Successfully!" : "จองโต๊ะสำเร็จเรียบร้อยแล้ว!";
                form.reset();
            } else {
                throw new Error('Network response was not ok');
            }
        })
        .catch(error => {
            msgDiv.style.color = 'red';
            msgDiv.textContent = currentLang === 'en' ? "Error sending reservation. Please call us." : "เกิดข้อผิดพลาด กรุณาโทรติดต่อร้าน";
        })
        .finally(() => {
            btn.textContent = originalText;
            btn.disabled = false;
        });
    });

    // 7. Review Carousel
    window.showReview = function(index) {
        const cards = document.querySelectorAll('.review-card');
        const dots = document.querySelectorAll('.dot');
        
        cards.forEach(c => c.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));
        
        cards[index].classList.add('active');
        dots[index].classList.add('active');
    };
});