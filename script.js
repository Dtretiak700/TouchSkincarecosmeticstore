gsap.registerPlugin(ScrollTrigger)
gsap.fromTo('.main-picture', {
    opacity: 0,
    scale: 2
}, {
    opacity: 1,
    scale: 1,
    yoyo: true,
    duration: 2
})

gsap.fromTo('.main-text-container', {
    scrollTrigger: {
        trigger: '.main-picture',
        start: '+=10% top',
        scrub: true
    },
    opacity: 1,
    y: 0
}, {
    scrollTrigger: {
        trigger: '.main-picture',
        start: '+=10% top',
        scrub: true
    },
    opacity: 0,
    y: -100,
    duration: 2
})

gsap.fromTo('.from-nature-move', {
    scrollTrigger: {
        trigger: '.from-nature',
        start: '-=30% top'
    },
    x: 100,
    opacity: 0,
}, {
    scrollTrigger: {
        trigger: '.from-nature',
        start: '-=30% top'
    },
    x: 0,
    opacity: 1,
    duration: 2,
    ease: 'back'
})

gsap.fromTo('.from-nature-move-two', {
    scrollTrigger: {
        trigger: '.head-min-container',
        start: '-=30% top'
    },
    x: 100,
    opacity: 0,
}, {
    scrollTrigger: {
        trigger: '.head-min-container',
        start: '-=30% top'
    },
    x: 0,
    opacity: 1,
    duration: 2,
    ease: 'back'
})

gsap.fromTo('.best-move', {
    scrollTrigger: {
        trigger: '.bestsellers',
        start: '-=30% top'
    },
    x: -100,
    opacity: 0,
}, {
    scrollTrigger: {
        trigger: '.bestsellers',
        start: '-=30% top'
    },
    x: 0,
    opacity: 1,
    duration: 2,
    ease: 'back'
})

gsap.fromTo('.best-one-move', {
    scrollTrigger: {
        trigger: '.bestsellers',
        start: '-=30% top'
    },
    opacity: 0,
    scale: 1.2,
    duration: 2
}, {
    scrollTrigger: {
        trigger: '.bestsellers',
        start: '-=30% top'
    },
    opacity: 1,
    scale: 1,
    duration: 2,
    stagger: .6
})

gsap.fromTo('.princ-move', {
    scrollTrigger: {
        trigger: '#principles',
        start: '-=100px top',
    },
    x: -100,
    opacity: 0,
}, {
    scrollTrigger: {
        trigger: '#principles',
        start: '-=100px top'
    },
    x: 0,
    opacity: 1,
    duration: 2,
    ease: 'back'
})

gsap.fromTo('.princ-move-two', {
    scrollTrigger: {
        trigger: '#principles',
        start: '+=300px top'
    },
    x: -100,
    opacity: 0,
}, {
    scrollTrigger: {
        trigger: '#principles',
        start: '+=300px top'
    },
    x: 0,
    opacity: 1,
    duration: 2,
    ease: 'back'
})

gsap.fromTo('.yes-no-move', {
    scrollTrigger: {
        trigger: '.yes-no-container',
        start: '-=50px top'
    },
    opacity: 0
}, {
    scrollTrigger: {
        trigger: '.yes-no-container',
        start: '-=50px top'
    },
    opacity: 1,
    duration: .5,
    stagger: .5
})

gsap.fromTo('#customers', {
    scrollTrigger: {
        trigger: "#customers",
        start: '-=100px top'
    },
    opacity: 0
}, {
    scrollTrigger: {
        trigger: "#customers",
        start: '-=100px top'
    },
    opacity: 1,
    duration: 1
})

gsap.fromTo('.visit-move', {
    scrollTrigger: {
        trigger: '#visit-us',
        start: '-=50px top'
    },
    x: -100,
    opacity: 0,
}, {
    scrollTrigger: {
        trigger: '#visit-us',
        start: '-=50px top'
    },
    x: 0,
    opacity: 1,
    duration: 2,
    ease: 'back'
})

gsap.fromTo('.visit-move-two', {
    scrollTrigger: {
        trigger: '#visit-us',
        start: '+=200px top'
    },
    x: -100,
    opacity: 0,
}, {
    scrollTrigger: {
        trigger: '#visit-us',
        start: '+=200px top'
    },
    x: 0,
    opacity: 1,
    duration: 2,
    ease: 'back'
})

gsap.fromTo('.face-move', {
    scrollTrigger: {
        trigger: '#face-care',
        start: '-=170px top'
    },
    x: -100,
    opacity: 0,
}, {
    scrollTrigger: {
        trigger: '#face-care',
        start: '-=170px top'
    },
    x: 0,
    opacity: 1,
    duration: 2,
    ease: 'back'
})

gsap.fromTo('.face-cleance-move', {
    scrollTrigger: {
        trigger: '.cleance',
        start: '-=130px top'
    },
    x: -100,
    opacity: 0,
}, {
    scrollTrigger: {
        trigger: '.cleance',
        start: '-=130px top'
    },
    x: 0,
    opacity: 1,
    duration: 2,
    ease: 'back'
})

gsap.fromTo('.cleance-move-pic', {
    scrollTrigger: {
        trigger: '.cleance',
        start: '-=130px top'
    },
    opacity: 0,
    scale: 1.2,
    duration: 2
}, {
    scrollTrigger: {
        trigger: '.cleance',
        start: '-=130px top'
    },
    opacity: 1,
    scale: 1,
    duration: 2,
    stagger: .6
})


gsap.fromTo('.treat-move', {
    scrollTrigger: {
        trigger: '.treat-masque',
        start: '-=100px top' 
    },
    opacity: 0,
    x: -100
}, {
    scrollTrigger: {
        trigger: '.treat-masque',
        start: '-=100px top' 
    },
    x: 0,
    opacity: 1,
    duration: 2,
    ease: 'back'
})

gsap.fromTo('.treat-move-pic', {
    scrollTrigger: {
        trigger: '.treat-masque',
        start: '-=100px top'
    },
    opacity: 0,
    scale: 1.2,
    duration: 2
}, {
    scrollTrigger: {
        trigger: '.treat-masque',
        start: '-=100px top'
    },
    opacity: 1,
    scale: 1,
    duration: 2,
    stagger: .6
})

gsap.fromTo('.toners-move', {
    scrollTrigger: {
        trigger: '.toners',
        start: '-=100px top' 
    },
    opacity: 0,
    x: -100
}, {
    scrollTrigger: {
        trigger: '.toners',
        start: '-=100px top' 
    },
    x: 0,
    opacity: 1,
    duration: 2,
    ease: 'back'
})

gsap.fromTo('.toners-move-pic', {
    scrollTrigger: {
        trigger: '.toners',
        start: '-=100px top'
    },
    opacity: 0,
    scale: 1.2,
    duration: 2
}, {
    scrollTrigger: {
        trigger: '.toners',
        start: '-=100px top'
    },
    opacity: 1,
    scale: 1,
    duration: 2,
    stagger: .6
})

gsap.fromTo('.hyd-move', {
    scrollTrigger: {
        trigger: '.hydrate',
        start: '-=100px top' 
    },
    opacity: 0,
    x: -100
}, {
    scrollTrigger: {
        trigger: '.hydrate',
        start: '-=100px top' 
    },
    x: 0,
    opacity: 1,
    duration: 2,
    ease: 'back'
})

gsap.fromTo('.hyd-move-pic', {
    scrollTrigger: {
        trigger: '.hydrate',
        start: '-=100px top'
    },
    opacity: 0,
    scale: 1.2,
    duration: 2
}, {
    scrollTrigger: {
        trigger: '.hydrate',
        start: '-=100px top'
    },
    opacity: 1,
    scale: 1,
    duration: 2,
    stagger: .6
})

gsap.fromTo('.scrub-move', {
    scrollTrigger: {
        trigger: '.scrubs',
        start: '-=100px top' 
    },
    opacity: 0,
    x: -100
}, {
    scrollTrigger: {
        trigger: '.scrubs',
        start: '-=100px top' 
    },
    x: 0,
    opacity: 1,
    duration: 2,
    ease: 'back'
})

gsap.fromTo('.scrub-move-pic', {
    scrollTrigger: {
        trigger: '.scrubs',
        start: '-=100px top'
    },
    opacity: 0,
    scale: 1.2,
    duration: 2
}, {
    scrollTrigger: {
        trigger: '.scrubs',
        start: '-=100px top'
    },
    opacity: 1,
    scale: 1,
    duration: 2,
    stagger: .6
})

gsap.fromTo('.about-move', {
    scrollTrigger: {
        trigger: '.about',
        start: '-=170px top'
    },
    x: -100,
    opacity: 0,
}, {
    scrollTrigger: {
        trigger: '.about',
        start: '-=170px top'
    },
    x: 0,
    opacity: 1,
    duration: 2,
    ease: 'back'
})

gsap.fromTo('.ingred-move', {
    scrollTrigger: {
        trigger: '.ingredients',
        start: '-=30% top'
    },
    x: 100,
    opacity: 0,
}, {
    scrollTrigger: {
        trigger: '.ingredients',
        start: '-=30% top'
    },
    x: 0,
    opacity: 1,
    duration: 2,
    ease: 'back'
})

gsap.fromTo('.gloss-move', {
    scrollTrigger: {
        trigger: '.glossary',
        start: '-=170px top'
    },
    x: -100,
    opacity: 0,
}, {
    scrollTrigger: {
        trigger: '.glossary',
        start: '-=170px top'
    },
    x: 0,
    opacity: 1,
    duration: 2,
    ease: 'back'
})

gsap.fromTo('.glossary-items', {
    scrollTrigger: {
        trigger: '.glossary',
        start: '-=170px top'
    },
    opacity: 0
}, {
    scrollTrigger: {
        trigger: '.glossary',
        start: '-=170px top'
    },
    opacity: 1,
    duration: .5,
    stagger: .5
})

gsap.fromTo('.regen-move', {
    scrollTrigger: {
        trigger: '.glossary-text-container',
        start: '-=50% top'
    },
    x: 100,
    opacity: 0,
}, {
    scrollTrigger: {
        trigger: '.glossary-text-container',
        start: '-=50% top'
    },
    x: 0,
    opacity: 1,
    duration: 2,
    ease: 'back'
})

gsap.fromTo('.head-advantage', {
    scrollTrigger: {
        trigger: '.advantage',
        start: '-=100px'
    },
    opacity: 0
}, {
    scrollTrigger: {
        trigger: '.advantage',
        start: '-=100px'
    },
    opacity: 1,
    duration: 2,
    stagger: .5
})

gsap.fromTo('.text-advantage', {
    scrollTrigger: {
        trigger: '.advantage',
        start: '-=100px'
    },
    opacity: 0
}, {
    scrollTrigger: {
        trigger: '.advantage',
        start: '-=100px'
    },
    opacity: 1,
    duration: 2,
    stagger: .5
})

gsap.fromTo('.skintype-move', {
    scrollTrigger: {
        trigger: '.skin-type',
        start: '-=170px top'
    },
    x: -100,
    opacity: 0,
}, {
    scrollTrigger: {
        trigger: '.skin-type',
        start: '-=170px top'
    },
    x: 0,
    opacity: 1,
    duration: 2,
    ease: 'back'
})

gsap.fromTo('.quiz-heading', {
    scrollTrigger: {
        trigger: '.skin-type-quiz',
        start: '-=170px top'
    },
    x: -100,
    opacity: 0,
}, {
    scrollTrigger: {
        trigger: '.skin-type-quiz',
        start: '-=170px top'
    },
    x: 0,
    opacity: 1,
    duration: 2,
    ease: 'back'
})

gsap.fromTo('.quiz-question', {
    scrollTrigger: {
        trigger: '.skin-type-quiz',
        start: '-=170px top'
    },
    x: -100,
    opacity: 0,
}, {
    scrollTrigger: {
        trigger: '.skin-type-quiz',
        start: '-=170px top'
    },
    x: 0,
    opacity: 1,
    duration: 2,
    ease: 'back'
})

gsap.fromTo('#btn-start', {
    scrollTrigger: {
        trigger: '.skin-type-quiz',
        start: '-=170px top'
    },
    x: -100,
    opacity: 0,
}, {
    scrollTrigger: {
        trigger: '.skin-type-quiz',
        start: '-=170px top'
    },
    x: 0,
    opacity: 1,
    duration: 2,
    ease: 'back'
})

//Reviews
const buttonReview = document.querySelectorAll('.customers-btn');
const textReview = document.querySelector('#randomReview');

const reviews = [`Great value for this product which is promoted in other shops for way more. Nice results.`,
`This is an amazing brand and especially the tangerine facial cleansing cream. The softness and clean effect after the use is unique. I snoever change brands again.`,
`I love this product. I don't use make-up (may it be a secret to beautiful skin), but I use it to clean off sunscreen or just the dirt of the day and the city air. Every time using it is a great ritual and a treat to the senses.`,
`My favorite cleanser! It’s my second  time buying  it.  I love the texture, smell
and how it gently but efficiently cleanses my skin. I have acne prone and
sensitive skin, so I’m happy to have found a cleanser that matches my needs.`,
`Just wanted to drop you a line to say thank you for the products. They are beautiful and I particularly like the face oil. It is heavenly and feels really nourishing! Thank you again!`,
`TOUCH SKINCARE Cosmetic is one of the most impressive brands we’ve come across`,
`Any of TOUCH SKINCARE Cosmetic's mature range will do the trick for wintry months. They are called moisturisers, but that’s an understatement! They behave like a supersonic balm in my opinion!`,
`The rejuvenate products are great and haven't caused a reaction. My daughter says it makes my skin look smoother and less tired! I have only been using it just over a week or so - wonderful results.`,
`I’m very keen on these amazing products by TOUCH SKINCARE Cosmetic. They not only smell divine, feel gorgeous but have the ingredients that I dream of! No nasties, just pure, thought out, conscious ingredients.`];

buttonReview.forEach(item => {
    item.addEventListener('click', () => {
        gsap.fromTo('#randomReview, .stars-review-pic', {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 2
        })
        let randomReviews = reviews[Math.floor(Math.random() * reviews.length)];
        textReview.style.display = "block";
        textReview.textContent = randomReviews;
    })
})

//Quiz
const buttonStart = document.querySelector('#btn-start');
const btnYes = document.querySelector('#yes');
const btnNo = document.querySelector('#no');
const questions = document.querySelector('.quiz-question');
const heading = document.querySelector('.quiz-heading');

buttonStart.addEventListener('click', a);
function a() {
    gsap.fromTo('.quiz-question', {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 2
    })
    heading.style.display = 'none';
    buttonStart.style.display = 'none';
    questions.style.color = '#272727';
    questions.innerHTML = `<span>Patches of skin on your face or body are flaky, whatever the season.</span> <br>Or if you find that "winter skin" never seems to disappear.`;
    btnYes.style.display = 'inline-block';
    btnNo.style.display = 'inline-block';

    btnYes.addEventListener('click', b);
    btnNo.addEventListener('click', d);
}

function b() {
    gsap.fromTo('.quiz-question', {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 2
    })
    questions.innerHTML = `<span>Your complexion appears dull and lackluster, no matter how many "brightening" products you apply.</span>`;
    btnYes.addEventListener('click', c);
    btnNo.addEventListener('click', e);
}

function c() {
    gsap.fromTo('.quiz-question', {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 2
    })
    questions.innerHTML = `<span>Moisturizer doesn't really make a difference, no matter how thick and creamy it is or how much you apply.</span>`;
    btnYes.addEventListener('click', drySkin);
    btnNo.addEventListener('click', f);
}

function drySkin() {
    gsap.fromTo('.quiz-question, .quiz-heading', {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 2
    })
    heading.style.display = 'block';
    heading.innerHTML = `Your skin type: DRY SKIN`;
    questions.innerHTML = `<span class="sm-quiz-answer">Dry skin is characterized by ashy, dull, and sometimes flaky skin. Your pores often feel tight (especially post-cleansing). Your skin will become naturally drier as you age since your skin's natural oil production starts to decrease. If your complexion is chronically dry, it means that you have a compromised skin barrier that water easily evaporates from. The skin must be regularly supplied with thick moisturizers (including humectants, emollients, occlusives, and face oils) to feel satisfied. There are foundations for dry skin that help hydrate, too.
    <br>
    However, it's important to note that dryness and dehydration aren't quite the same thing. To put things simply, dryness refers to a skin type, and dehydration refers to a skin condition. Dry skin is a result of a lack of oil in the skin, while dehydrated skin is the result of a lack of water in the skin. People with dehydrated skin don't necessarily have dry skin—it could be oily, combination, or normal skin that is simply lacking hydration.</span>`
    btnYes.style.display = 'none';
    btnNo.style.display = 'none';
}

function d() {
    gsap.fromTo('.quiz-question', {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 2
    })
    questions.innerHTML = `<span>By mid-afternoon, a greasy film has developed on your face, even though your skin felt fine when you left home this morning.</span>`;
    btnYes.addEventListener('click', e);
    btnNo.addEventListener('click', g);
}

function e() {
    gsap.fromTo('.quiz-question', {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 2
    })
    questions.innerHTML = `<span>Acne breakouts are making you feel like your 16-year-old self.</span><br> (Minus the homework and boy-band crushes.)`;
    btnYes.addEventListener('click', f);
    btnNo.addEventListener('click', h);
}


function f() {
    gsap.fromTo('.quiz-question', {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 2
    })
    questions.innerHTML = `<span>The more you scrub your skin, the oilier it seems to get, and the more you seem to break out.</span>`;
    btnYes.addEventListener('click', oilySkin);
    btnNo.addEventListener('click', i);
}

function oilySkin() {
    gsap.fromTo('.quiz-question, .quiz-heading', {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 2
    })
    heading.style.display = 'block';
    heading.innerHTML = `Your skin type: OILY SKIN`;
    questions.innerHTML = `<span class="sm-quiz-answer">People with oily skin have overactive oil glands that produce more sebum than the average face. As a result, you'll notice that your skin is particularly shiny even an hour or two after washing. Oily skin is also commonly acne-prone, although it doesn't have to be. However, Dr. King notes that because sebum can lead to clogged pores, acne is a common occurrence. Toners for acne-prone skin added to your daily skin-care routine can help keep your skin clear.</span>`;
    btnYes.style.display = 'none';
    btnNo.style.display = 'none';
}

function g() {
    gsap.fromTo('.quiz-question', {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 2
    })
    questions.innerHTML = `<span>Your forehead is typically shiny, while appearing dry or normal on the cheeks.</span>`;
    btnYes.addEventListener('click', h);
    btnNo.addEventListener('click', j);
}

function h() {
    gsap.fromTo('.quiz-question', {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 2
    })
    questions.innerHTML = `<span>You tend to break out in the same areas.</span>`;
    btnYes.addEventListener('click', i);
    btnNo.addEventListener('click', k);
}

function i() {
    gsap.fromTo('.quiz-question', {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 2
    })
    questions.innerHTML = `<span>Different skincare products work in some areas but irritate others.</span>`;
    btnYes.addEventListener('click', combiSkin);
    btnNo.addEventListener('click', l);
}

function combiSkin() {
    gsap.fromTo('.quiz-question, .quiz-heading', {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 2
    })
    heading.style.display = 'block';
    heading.innerHTML = `Your skin type: COMBINATION SKIN`;
    questions.innerHTML = `<span class="sm-quiz-answer">Combination skin is a tricky beast to tame. You tend to get oily in the T-zone area and dry on other areas of the face, meaning you can be prone to pimples and dry patches at the same time. Unfortunately, derms say combination skin is the most common of all skin types. The good news? It's possible to maintain. Case in point: There are hybrid moisturizers that work for all-over application without triggering one portion of your face or the other.</span>`;
    btnYes.style.display = 'none';
    btnNo.style.display = 'none';
}

function j() {
    gsap.fromTo('.quiz-question', {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 2
    })
    questions.innerHTML = `<span>Forgetting to bring a cleanser on a trip is no problem since you can just use the one at the hotel.</span>`;
    btnYes.addEventListener('click', k);
    btnNo.addEventListener('click', m);
}

function k() {
    gsap.fromTo('.quiz-question', {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 2
    })
    questions.innerHTML = `<span>In your makeup routine, setting sprays and mattifying powders don't really seem necessary.</span>`;
    btnYes.addEventListener('click', l);
    btnNo.addEventListener('click', n);
}

function l() {
    gsap.fromTo('.quiz-question', {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 2
    })
    questions.innerHTML = `<span>You're able to tolerate higher levels of typically irritating ingredients, such as retinol or glycolic acid.</span>`;
    btnYes.addEventListener('click', normalSkin);
    btnNo.addEventListener('click', o);
}

function normalSkin() {
    gsap.fromTo('.quiz-question, .quiz-heading', {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 2
    })
    heading.style.display = 'block';
    heading.innerHTML = `Your skin type: NORMAL SKIN`;
    questions.innerHTML = `<span class="sm-quiz-answer">Normal skin is neither particularly oily nor particularly dry overall. "While people with dry or oily skin types find that certain ingredients are too irritating, you may find that almost everything works for you," says Dr. King. This is definitely the easiest skin type to have, so consider yourself lucky—and give your parents some love for passing down some pretty awesome genes.</span>`;
    btnYes.style.display = 'none';
    btnNo.style.display = 'none';
}

function m() {
    gsap.fromTo('.quiz-question', {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 2
    })
    questions.innerHTML = `<span>Regular beauty products leave your skin irritated, red, and sometimes stinging.</span><br> Scented products can be especially troublesome.`;
    btnYes.addEventListener('click', n);
    btnNo.addEventListener('click', a);
}

function n() {
    gsap.fromTo('.quiz-question', {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 2
    })
    questions.innerHTML = `<span>Changing the kind of laundry detergent you use sets off a rash on your finicky skin.</span><br> Even using a new towel can make you see red.`;
    btnYes.addEventListener('click', o);
    btnNo.addEventListener('click', b);
}

function o() {
    gsap.fromTo('.quiz-question', {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 2
    })
    questions.innerHTML = `<span>Some spa treatments, such as intensive facials and alpha hydroxy peels, feel too strong.</span><br> You would much prefer a massage to having someone pick and poke at your face.`;
    btnYes.addEventListener('click', sensSkin);
    btnNo.addEventListener('click', c);
}

function sensSkin() {
    gsap.fromTo('.quiz-question, .quiz-heading', {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 2
    })
    heading.style.display = 'block';
    heading.innerHTML = `Your skin type: SENSITIVE SKIN`;
    questions.innerHTML = `<span class="sm-quiz-answer">Sensitive skin can be identified by how it reacts to topical products. You might experience burning or itching sensations when using certain products, especially peels (i.e., retinol) or ones with fragrance. Sensitive skin is also prone to skin conditions like eczema, dermatitis, psoriasis, or rosacea, so if you have any of those, chances are you have sensitive skin. Remember that your skin can become sensitive through things like aging and excessive retinol use.</span>`;
    btnYes.style.display = 'none';
    btnNo.style.display = 'none';
}

//Random Images
const firstPic = document.querySelector('.first-little-pic');
const secondPic = document.querySelector('.second-little-pic');

const firstArray = ["url('portrait-beautiful-woman-with-clear-skin-posing-with-baby-s-breath-flowers.jpg')",
"url('portrait-beautiful-woman-with-clear-skin-using-face-scrub.jpg')",
"url('portrait-beautiful-woman-with-clear-skin-using-moisturizer-her-face.jpg')",
"url('portrait-beautiful-woman-with-clear-skin-posing-with-monster-plant-leaf.jpg')",
"url('portrait-beautiful-woman-with-clear-skin-holding-orange-fruit.jpg')",
"url('portrait-beautiful-woman-with-clear-skin-using-guasha-massage-her-face.jpg')",
"url('portrait-beautiful-woman-with-clear-skin-using-face-serum.jpg')",
"url('portrait-beautiful-woman-with-beauty-clay-mask-her-face.jpg')",
"url('portrait-beautiful-woman-with-clear-skin-using-eye-patches.jpg')"];

const secondArray = ["url('composition-skin-care-cream.jpg')",
"url('composition-skin-beauty-product-bottle.jpg')",
"url('front-view-skin-oil-dropper.jpg')",
"url('perfume-bottle-rocks-arrangement.jpg')",
"url('arrangement-skin-care-cream.jpg')",
"url('composition-skin-beauty-products.jpg')",
"url('front-view-arrangement-skin-care-cream.jpg')",
"url('skin-care-moisture-recipients-assortment-sand.jpg')",
"url('top-view-skin-oil-dropper.jpg')",
"url('transparent-skin-care-moisture-recipient-arrangement.jpg')"];

setInterval(backgrChangeOne, 3000);
function backgrChangeOne() {
    gsap.fromTo('.first-little-pic', {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 2
    })
    firstPic.style.backgroundImage = firstArray[Math.floor(Math.random() * firstArray.length)];
}

setInterval(backgrChangeTwo, 5000);
function backgrChangeTwo() {
    gsap.fromTo('.second-little-pic', {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 2
    })
    secondPic.style.backgroundImage = secondArray[Math.floor(Math.random() * secondArray.length)];
}


