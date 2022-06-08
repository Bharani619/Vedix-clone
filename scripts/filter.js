function display(){
    return `
    <div id="head">
    <i class="fas fa-angle-left"></i>
    <h1 style="text-align: center;letter-spacing: 1px;">Filter</h1>
    </div>
    <hr>
    <p style="font-size: 20px; font-weight: 400; margin-left: 15px; margin-bottom: 15px;">Gender</p>
    <div id="gender" style="display: flex; justify-content: space-around;">
        <div><input type="radio" class='gender' id="male" name="radio" value="male">
            <label for="male">Male</label>
        </div>
        <div><input type="radio" id="female" class='gender' name="radio" value="female">
            <label for="female">Female</label>
        </div>
    </div>
    <hr>
    <p style="font-size: 20px; font-weight: 400; margin-left: 15px; margin-bottom: 15px;">Category</p>

    <div id="content">
        <div class="select">
            <input type="radio" id="faceoil" name="product" value="oil">
            <label for="faceoil"> Face Oil</label>
        </div>

        <div class="select">
            <input type="radio" id="conditioner" name="product" value="cond">
            <label for="conditioner"> Hair Conditioners</label>
        </div>

        <div class="select">
            <input type="radio" id="clean" name="product" value="clean">
            <label for="clean"> Cleansers</label>
        </div>

        <div class="select">
            <input type="radio" id="facemask" name="product" value="facemask">
            <label for="facemask"> Face Masks</label>
        </div>

        <div class="select">
            <input type="radio" id="facetoner" name="product" value="toner">
            <label for="facetoner"> Face Toners</label>
        </div>

        <div class="select">
            <input type="radio" id="moisture" name="product" value="moisture">
            <label for="moisture"> Moisturizers</label>
        </div>

        <div class="select">
            <input type="radio" id="shampoo" name="product" value="shampoo">
            <label for="shampoo"> Anti-Hairfall Shampoos</label>
        </div>

        <div class="select">
            <input type="radio" id="hairpack" name="product" value="hairpack">
            <label for="hairpack"> Hair Packs</label>
        </div>

        <div class="select">
            <input type="radio" id="hairoil" name="product" value="Oil">
            <label for="hairoil"> Hair Base Oils</label>
        </div>

        <div class="select">
            <input type="radio" id="hairdandruff" name="product" value="shampoo">
            <label for="hairdandruff"> Hair Base Oils</label>
        </div>

        <div class="select">
            <input type="radio" id="hairmask" name="product" value="hairmask">
            <label for="hairmask"> Hair Masks</label>
        </div>

        <div class="select">
            <input type="radio" id="hairfall" name="product" value="serum">
            <label for="hairfall"> Anti-Hairfall Serums</label>
        </div>


    </div>
    <div id="apply_reset">
        <button id="reset">RESET</button>
        <button id="apply">APPLY</button>
    </div>`
}

function show(sh){
    
    let state=sh.style.display;
    
    if(state=='none'){
        sh.style.display='block';
    }else{
        sh.style.display='none';
    }
    
}


let ProductArr=[{
    gender:'male',
    category:'oil',
    title:'Prayam Durva Booster Oil For Dandruff Care',
    strickedPrice: 233,
    price: 299,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Prayam-Durva-Booster-Oil-For-Dandruff-Care_400x400.jpg?v=1640278673',
},
{
    gender:'female',
    category:'toner',
    title:'Antara ClearMatte Pore Refining Facial Toner For Oily Acne Prone Skin',
    strickedPrice: 359,
    price: 399,
    image :'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Antara-ClearMatte-Pore-Refining-Facial-Toner-For-Oily-Acne-Prone-Skin_400x400.jpg?v=1640281242',
},
{
    gender:'female',
    category:'facemask',
    title:'Vaimal One Step Clarifying Facial Toner For Acne Prone Skin',
    strickedPrice:359,
    price: 399,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Vaimal-One-Step-Clarifying-Facial-Toner-For-Acne-Prone-Skin_400x400.jpg?v=1640281184',
},
{
    gender:'male',
    category:'oil',
    title:'Vita Face Oil For Ageing Skin',
    strickedPrice:359,
    price: 399,
    image :'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Vita-Face-Oil-For-Ageing-Skin_400x400.jpg?v=1640280950',
},
{
    gender:'male',
    category:'faceoil',
    title:'Abhyud Face Oil For Acne Prone Skin',
    strickedPrice:359,
    price:399,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Abhyud-Face-Oil-For-Acne-Prone-Skin_400x400.jpg?v=1640280891',
},{
    gender:'male',
    category:'facemask',
    title:'Avasya Clarifying Clay Mask For Acne Prone Skin',
    strickedPrice: 359,
    price:399,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Avasya-Clarifying-Clay-Mask-For-Acne-Prone-Skin_400x400.jpg?v=1640281031',
},
{
    gender:'female',
    category:'facemask',
    title:'Dhaval Skin Radiance Facial Clay Mask For Pigmented Skin',
    strickedPrice:359,
    price:399,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Dhaval-Skin-Radiance-Facial-Clay-Mask-For-Pigmented-Skin_400x400.jpg?v=1640281070',
},
{
    gender:'female',
    category:'shampoo',
    title:'Samarha Oil Balance Shampoo',
    strickedPrice:399,
    price:499,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Hero-Image_fcfab23a-f88f-4328-b1f7-03fb3b199490_400x400.jpg?v=1640157523',
},
{
    gender:'male',
    category:'cond',
    title:'Paristar Super Shield Sun Block Leave-In Conditioner For Hair',
    strickedPrice:449,
    price:499,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Parfstar-super-shleid-sun-block-intense-leave-in-conditioner_400x400.jpg?v=1640279191',
},
{
    gender:'male',
    category:'oil',
    title:'Tavas Non Sticky Hair Fall Oil for Oily Scalp',
    strickedPrice:449,
    price:499,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Tavas-non-sticky-hair-fall-oil_e925fcf4-2e45-43eb-8921-1c7114dd9025_400x400.jpg?v=1640273983',
},
{
    gender:'female',
    category:'oil',
    title:'Prachay Serum For Mild Hair Fall',
    strickedPrice:499,
    price:649,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Hero-Image_ebbddf12-3bcb-491f-be90-db7f188c26f9_400x400.jpg?v=1640162573',
},
{
    gender:'male',
    category:'oil',
    title:'Hair Care Regimen',
    strickedPrice:1499,
    price:999,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/files/collections-full-regimen-hair.png?v=1616498725',
},
{
    gender:'female',
    category:'faceoil',
    title:'Skin Care Regimen',
    strickedPrice:1499,
    price:999,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/files/collections-full-regimen-skin.png?v=1616498725',
},
{
    gender:'female',
    category:'oil',
    title:'Ahuta Root Stimulating Hair Oil For Women',
    strickedPrice:899,
    price:699,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Ahuta--Root-Stimulating-Hair-oil_400x400.jpg?v=1640272887',
},
{
    gender:'female',
    category:'oil',
    title:'Jeevath Root Stimulating Hair Oil For Women',
    strickedPrice:899,
    price:699,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Jeevath-Root-Stimulating-Hair-oil_400x400.jpg?v=1640273179',
},
{
    gender:'female',
    category:"oil",
    title:'Niryath Root Stimulating Hair Oil For Women',
    strickedPrice:899,
    price:699,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Niryath-Root-Stimulating-Hair-oil_400x400.jpg?v=1640273571',
},
{
    gender:'female',
    category:'oil',
    title:'Vapra Root Stimulating Hair Oil For Women',
    strickedPrice:899,
    price:699,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/vapra-Root-Stimulating-Hair-oil_400x400.jpg?v=1640273051',
},
{
    gender:'female',
    category:'oil',
    title:'Vapra Root Stimulating Hair Oil For Women',
    strickedPrice:899,
    price:699,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/vapra-Root-Stimulating-Hair-oil_400x400.jpg?v=1640273051',
},
{
    gender:'female',
    category:'oil',
    title:'Vanya Root Stimulating Hair Oil For Women',
    strickedPrice:899,
    price:699,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/vanya-Root-Stimulating-Hair-oil_400x400.jpg?v=1640273757',
},
{
    gender:'female',
    category:'oil',
    title:'Praya Root Stimulating Hair Oil For Women',
    strickedPrice:899,
    price:699,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Praya-Root-Stimulating-Hair-oil_400x400.jpg?v=1640273247',
},
{
    gender:'male',
    category:'oil',
    title:'Ahuta Root Stimulating Hair Oil For Men',
    strickedPrice:899,
    price:699,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Ahuta--Root-Stimulating-Hair-oil-Men_e0088b8f-a778-403e-81e9-9700bf8427c1_400x400.jpg?v=1640273367',
},
{
    gender:'male',
    category:'oil',
    title:'Jeevath Root Stimulating Hair Oil For Men',
    strickedPrice:899,
    price:699,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Jeevath--Root-Stimulating-Hair-oil-Men_400x400.jpg?v=1640273829',
},
{
    gender:'male',
    category:'oil',
    title:'Niryath Root Stimulating Hair Oil For Men',
    strickedPrice:899,
    price:699,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Niryath--Root-Stimulating-Hair-oil-Men_400x400.jpg?v=1640273618',
},
{
    gender:'male',
    category:'oil',
    title:'Vanya Root Stimulating Hair Oil For Men',
    strickedPrice:899,
    price:699,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Vanya--Root-Stimulating-Hair-oil-Men_400x400.jpg?v=1640273302',
},
{
    gender:'male',
    category:'oil',
    title:'Vapra Root Stimulating Hair Oil For Men',
    strickedPrice:899,
    price:699,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Vapra--Root-Stimulating-Hair-oil-Men_400x400.jpg?v=1640273429',
},
{
    gender:'male',
    category:'oil',
    title:'Praya Root Stimulating Hair Oil For Men',
    strickedPrice:899,
    price:699,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/praya-Root-Stimulating-Hair-oil-Men_513a5a1e-cedb-442b-b341-d734ac2b9d51_400x400.jpg?v=1640273674',
},
{
    gender:'male',
    category:'oil',
    title:'Shvedan Hair Fall Oil for Dry Scalp',
    strickedPrice:499,
    price:449,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Shvedan-hair-fall-oil_1adebe6b-a07d-4eb4-adf3-e0a862dc7980_400x400.jpg?v=1640273884',
},
{
    gender:'female',
    category:'cond',
    title:'Viruj Hair Fall Oil for Normal-Oily Scalp',
    strickedPrice:499,
    price:449,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Viruj-hair-fall-oil_392213e2-d0b2-4a95-a59d-84e7adedd38a_400x400.jpg?v=1640273933',
},
{
    gender:'male',
    category:'cond',
    title:'Tavas Non Sticky Hair Fall Oil for Oily Scalp',
    strickedPrice:499,
    price:449,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Tavas-non-sticky-hair-fall-oil_e925fcf4-2e45-43eb-8921-1c7114dd9025_400x400.jpg?v=1640273983',
},
{
    gender:'female',
    category:'shampoo',
    title:'Dhavath Hairfall Shampoo For Women',
    strickedPrice:499,
    price:449,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Dhavath-hairfall-shampoo_e40d3747-7c10-4fdb-9cff-cb536e5a6502_400x400.jpg?v=1640274128',
},
{
    gender:'female',
    category:'shampoo',
    title:'Vikleda Deep Conditioning Shampoo For Dry Hair For Women',
    strickedPrice:499,
    price:449,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Vikleda-hairfall-shampoo_400x400.jpg?v=1640274071',
},
{
    gender:'female',
    category:'shampoo',
    title:'Vardara Deep Conditioning Shampoo with Dandruff Care For Dry Hair For Women',
    strickedPrice:499,
    price:449,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Vardara-hairfall-shampoo-Men_400x400.jpg?v=1640274205',
},
{
    gender:'female',
    category:'shampoo',
    title:'Taritha Hairfall Shampoo with Dandruff Care For Women',
    strickedPrice:499,
    price:449,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Taritha-hairfall-shampoo_af15d9af-9eb4-44f4-b321-3a9e0e81ac96_400x400.jpg?v=1640274308',
},
{
    gender:'male',
    category:"shampoo",
    title:'Taritha Hairfall Shampoo with Dandruff Care For Men',
    strickedPrice:499,
    price:449,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Taritha-hairfall-shampoo-Men_400x400.jpg?v=1640274585',
},
{
    gender:'male',
    category:'shampoo',
    title:'Dhavath Hairfall Shampoo For Men',
    strickedPrice:499,
    price:449,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Dhavath-hairfall-shampoo-Men_400x400.jpg?v=1640274483',
},
{
    gender:'male',
    category:'shampoo',
    title:'Vardara Deep Conditioning Shampoo with Dandruff Care For Dry Hair For Men',
    strickedPrice:499,
    price:449,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Vardara-hairfall-shampoo-Men_4a107429-94ef-4a72-91ae-64e4e0a850d6_400x400.jpg?v=1640274539',
},
{
    gender:'male',
    category:"shampoo",
    title:'Vikleda Deep Conditioning Shampoo For Dry Hair For Men',
    strickedPrice:499,
    price:449,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Vikleda-hairfall-shampoo-Men_400x400.jpg?v=1640274413',
},
{
    gender:'female',
    category:'serum',
    title:'Vithan Pro Hair Growth Serum For Women',
    strickedPrice:1299,
    price:799,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Vithan-Pro-hair-growth-Serum_1fc5f2e5-9f3f-4b5f-b99f-bd8dee8fa419_400x400.jpg?v=1640277899',
},
{
    gender:'female',
    category:'serum',
    title:'Nuyantra Pro Hair Growth Serum x Dandruff Care For Women',
    strickedPrice:1299,
    price:799,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Nuyantra-Pro-hair-growth-Serum_94053f22-8023-4c13-8e15-193b49a3a1af_400x400.jpg?v=1640277802',
},
{
    gender:'female',
    category:'serum',
    title:'Nibhida Advanced Hair Growth Serum x Dandruff Care For Women',
    strickedPrice:1299,
    price:799,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/nibidha-serum-women_400x400.jpg?v=1640277298',
},
{
    gender:'female',
    category:'serum',
    title:'Samroha Advanced Hair Growth Serum For Women',
    strickedPrice:1299,
    price:799,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Samroha-Pro-hair-growth-Serum_4e0e3553-b442-40c0-b733-6f40fa6eb3ff_400x400.jpg?v=1640277721',
},
{
    gender:'male',
    category:'serum',
    title:'Nuyantra Pro Hair Growth Serum x Dandruff Care For Men',
    strickedPrice:1299,
    price:799,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Nuyantra-Pro-hair-growth-Serum-Men_a79f662b-6071-40d9-93f9-94eb533787f4_400x400.jpg?v=1640278488',
},
{
    gender:'male',
    category:'serum',
    title:'Vithan Pro Hair Growth Serum For Men',
    strickedPrice:1299,
    price:799,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Vithan-Pro-hair-growth-Serum-Men_440e23c2-78a7-4df4-b5ab-e2060bacbe10_400x400.jpg?v=1640279329',
},
{
    gender:'male',
    category:'serum',
    title:'Samroha Advanced Hair Growth Serum For Men',
    strickedPrice:1299,
    price:799,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Samroha-Pro-hair-growth-Serum-Men_3728a681-ffea-40a8-96b3-9246de4380f1_400x400.jpg?v=1640278558',
},
{
    gender:'male',
    category:'serum',
    title:'Nibhida Advanced Hair Growth Serum x Dandruff Care For Men',
    strickedPrice:1299,
    price:799,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Nibhida-advanced-Pro-hair-growth-Serum-Men_f821bc8b-3225-4049-ad76-6da35d77e55f_400x400.jpg?v=1640277971',
},
{
    gender:'female',
    category:'serum',
    title:'Prachay Serum For Mild Hair Fall',
    strickedPrice:649,
    price:499,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Hero-Image_ebbddf12-3bcb-491f-be90-db7f188c26f9_400x400.jpg?v=1640162573',
},
{
    gender:'female',
    category:'serum',
    title:'Pragath Serum For Intense Hair Fall',
    strickedPrice:799,
    price:599,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Hero-Image_f32a62d5-1fb1-4b3f-b926-1ce9f606fdd8_400x400.jpg?v=1640162613',
},
{
    gender:'female',
    category:'serum',
    title:'Suyam Hair Growth with Dandruff Care Serum For Moderate Dandruff',
    strickedPrice:749,
    price:599,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Hero-Image_5ab3d140-c5e5-465f-8748-22923c6f215f_400x400.jpg?v=1640162485',
},
{
    gender:'female',
    category:'serum',
    title:'Pratiti Hair Growth with Dandruff Care Serum For Severe Dandruff',
    strickedPrice:849,
    price:699,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Hero-Image_011c2c69-dde5-4bfd-9a92-d5c02f301e85_400x400.jpg?v=1640162442',
},
{
    gender:'male',
    category:'serum',
    title:'Rudhi Serum For Advanced Hair Fall',
    strickedPrice:999,
    price:699,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Hero-Image_1cc940d1-ba96-458d-aa84-547234080827_400x400.jpg?v=1640162546',
},
{
    gender:'male',
    category:'oil',
    title:'Vikruth Amla Booster Oil For Thick Hair',
    strickedPrice:299,
    price:233,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Vikruth-Amla-Booster-Oil-For-Thick-Hair_400x400.jpg?v=1640278845',
},
{
    gender:'male',
    category:'hairpack',
    title:'Saha Bhringraj Booster Oil For Hair Growth',
    strickedPrice:299,
    price:233,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Saha-Bhringraj-Booster-Oil-For-Hair-Growth_400x400.jpg?v=1640278791',
},
{
    gender:'female',
    category:'hairpack',
    title:'Prayam Durva Booster Oil For Dandruff Care',
    strickedPrice:299,
    price:233,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Prayam-Durva-Booster-Oil-For-Dandruff-Care_400x400.jpg?v=1640278673',
},
{
    gender:'female',
    category:'hairpack',
    title:'Prabal Brahmi Booster Oil For De-Stress x Hair Growth',
    strickedPrice:299,
    price:233,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Prabal-Brahmi-Booster-Oil-For_400x400.jpg?v=1640278713',
},
{
    gender:'male',
    category:'cond',
    title:'Vartha Hydrating No-Frizz Hair Conditioner',
    strickedPrice:499,
    price:449,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Vartha-Hydrating-No-Frizz-Hair-Conditioner_400x400.jpg?v=1640279423',
},
{
    gender:'female',
    category:'cond',
    title:'Leave-In Conditioning Hair Mist',
    strickedPrice:499,
    price:449,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Leave-In-Conditioning-Hair-Mist_400x400.jpg?v=1640278995',
},
{
    gender:'female',
    category:'cond',
    title:'Sushath No-Frizz Intense Moisture Solution Leave-In Conditioner For Hair',
    strickedPrice:499,
    price:449,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Sushath-no-Frizz-Moisture--leave-in-conditioner_400x400.jpg?v=1640279039',
},
{
    gender:'male',
    category:'cond',
    title:'Rachan Intense Damage Restore Leave-In Conditioner For Hair',
    strickedPrice:499,
    price:449,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Rachan-intense-leave-in-conditioner-newheroimage_400x400.jpg?v=1640279242',
},
{
    gender:'male',
    category:'cond',
    title:'Paristar Super Shield Sun Block Leave-In Conditioner For Hair',
    strickedPrice:499,
    price:449,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Parfstar-super-shleid-sun-block-intense-leave-in-conditioner_400x400.jpg?v=1640279191',
},
{
    gender:'male',
    category:'hairpack',
    title:'Root Strengthening Hair Pack',
    strickedPrice:799,
    price:449,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Hair-Pack-Onion-_-Fenugreek-_500px_400x400.jpg?v=1641879148',
},
{
    gender:'male',
    category:'hairmask',
    title:'Druti SheaCare Deep Nourish Hair Mask For Dry Hair',
    strickedPrice:599,
    price:499,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Hero-Image_06d87d40-9829-4d6e-8881-5f3a69c95791_400x400.jpg?v=1640158048',
},
{
    gender:'female',
    category:'hairmask',
    title:'Pratida Shine Rebound Hydrating Hair Mask For Coloured & Chemically Treated Hair',
    strickedPrice:599,
    price:499,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/HeroImage_400x400.jpg?v=1640158049',
},
{
    gender:'female',
    category:'hairmask',
    title:'Niktha VitC Oil Balance Hair Mask For Greasy Hair',
    strickedPrice:599,
    price:499,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Hero-Image_ab6cc254-c65b-4d2b-8822-dd3f2741e00b_400x400.jpg?v=1640158037',
},
{
    gender:'female',
    category:'facemask',
    title:'Anuva Moisturizing Face Wash For Women',
    strickedPrice:499,
    price:449,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Anuva-01_400x400.jpg?v=1641988328',
},
{
    gender:'female',
    category:'facemask',
    title:'Drithi Ultra Gentle Face Wash For Women',
    strickedPrice:699,
    price:449,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Driti-01_400x400.jpg?v=1641988619',
},
{
    gender:'female',
    category:'facemask',
    title:'Anaha Deep Cleansing Face Wash For Women',
    strickedPrice:559,
    price:449,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Anaha-01_400x400.jpg?v=1641988492',
},
{
    gender:'male',
    category:'facemask',
    title:'Medhur Moisturizing Face Wash For Men',
    strickedPrice:599,
    price:449,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Medhur-01_400x400.jpg?v=1641993798',
},
{
    gender:'male',
    category:'facemask',
    title:'Vilaksh Ultra Gentle Face Wash For Men',
    strickedPrice:599,
    price:449,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Vilaksh-01_400x400.jpg?v=1641994061',
},
{
    gender:'female',
    category:'moisture',
    title:'Sthavi HydroPlenish Moisturizing Facial Cream For Women',
    strickedPrice:599,
    price:499,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Sthavi-HydroPlenish-Moisturizing-Facial-Cream-For-Women_400x400.jpg?v=1640279900',
},
{
    gender:'female',
    category:'moisture',
    title:'Anudha Glow Restore Moisturizing Face Lotion For Women',
    strickedPrice:599,
    price:449,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Anudha-Glow-Restore-Moisturizing-Face-Lotion-For-Women_400x400.jpg?v=1640280130',
},
{
    gender:'female',
    category:'moisture',
    title:'Niraj HydroMatte Oil Free Face Gel For Women',
    strickedPrice:599,
    price:449,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Niraj-HydroMatte-Oil-Free-Face-Gel-For-Women_400x400.jpg?v=1640280069',
},
{
    gender:'male',
    category:'moisture',
    title:'Siddh HydraPlenish Moisturizing Facial Lotion For Men',
    strickedPrice:599,
    price:449,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Siddh-HydraPlenish-Moisturizing-Facial-Lotion-For-Men_400x400.jpg?v=1640280255',
},
{
    gender:'male',
    category:'moisture',
    title:'Ekansh HydroTonic Moisturizing Facial Cream For Men',
    strickedPrice:599,
    price:499,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Ekansh-HydroTonic-Moisturizing-Facial-Cream-For-Men_400x400.jpg?v=1640280170',
},
{
    gender:'female',
    category:'faceSerum',
    title:'Avas Spot Correcting Face Serum For Women',
    strickedPrice:599,
    price:499,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Avas-Spot-Correcting-Face-Serum-For-Women_400x400.jpg?v=1640280314',
},
{
    gender:'female',
    category:'faceSerum',
    title:'Prakhya Acne Rescue Face Serum For Women',
    strickedPrice:599,
    price:499,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Prakhya-Acne-Rescue-Face-Serum-For-Women_400x400.jpg?v=1640280352',
},
{
    gender:'female',
    category:'faceSerum',
    title:'Aloka VC Brightening Face Serum For Women',
    strickedPrice:599,
    price:499,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Aloka-VC-Brightening-Face-Serum-For-Women_400x400.jpg?v=1640280398',
},
{
    gender:'female',
    category:'faceSerum',
    title:'Prastha FirmRestore Face Serum For Women',
    strickedPrice:599,
    price:499,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Prastha-FirmRestore-Face-Serum-For-Women-NewHeroImage_400x400.jpg?v=1640280613',
},
{
    gender:'male',
    category:'faceSerum',
    title:'Irya Spot Correcting Face Serum For Men',
    strickedPrice:599,
    price:449,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Irya-Spot-Correcting-Face-Serum-For-Men_400x400.jpg?v=1640280660',
},
{
    gender:'male',
    category:'faceOil',
    title:'Anagh Face Oil For Pigmented Skin',
    strickedPrice:399,
    price:359,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Anagh-Face-Oil-For-Pigmented-Skin_400x400.jpg?v=1640280920',
},
{
    gender:'female',
    category:'clean',
    title:'Vita Face Oil For Ageing Skin',
    strickedPrice:399,
    price:359,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Vita-Face-Oil-For-Ageing-Skin_400x400.jpg?v=1640280950',
},
{
    gender:'male',
    category:'clean',
    title:'Abhyud Face Oil For Acne Prone Skin',
    strickedPrice:399,
    price:359,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Abhyud-Face-Oil-For-Acne-Prone-Skin_400x400.jpg?v=1640280891',
},
{
    gender:'female',
    category:'clean',
    title:'Rejat Brightening Clay Mask For Tanned Skin',
    strickedPrice:399,
    price:359,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Rejat-Brightening-Clay-Mask-For-Tanned-Skin_400x400.jpg?v=1640280999',
},
{
    gender:'female',
    category:'faceOil',
    title:'Dhaval Skin Radiance Facial Clay Mask For Pigmented Skin',
    strickedPrice:399,
    price:359,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Dhaval-Skin-Radiance-Facial-Clay-Mask-For-Pigmented-Skin_400x400.jpg?v=1640281070',
},
{
    gender:'female',
    catagory:'clean',
    title:'Avasya Clarifying Clay Mask For Acne Prone Skin',
    strickedPrice:399,
    price:359,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Avasya-Clarifying-Clay-Mask-For-Acne-Prone-Skin_400x400.jpg?v=1640281031',
},
{
    gender:'male',
    category:'clean',
    title:'Samdha Firming Facial Clay Mask For Ageing Skin',
    strickedPrice:399,
    price:359,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Samdha-Firming-Facial-Clay-Mask-For-Ageing-Skin_400x400.jpg?v=1640281101',
},
{
    gender:'male',
    category:'toner',
    title:'Saday Gentle Glow Hydrating Face Toner For Normal Skin',
    strickedPrice:399,
    price:359,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Saday-Gentle-Glow-Hydrating-Face-Toner-For-Normal-Skin_400x400.jpg?v=1640281151',
},
{
    gender:'female',
    category:'toner',
    title:'Antara ClearMatte Pore Refining Facial Toner For Oily Acne Prone Skin',
    strickedPrice:399,
    price:359,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Antara-ClearMatte-Pore-Refining-Facial-Toner-For-Oily-Acne-Prone-Skin_400x400.jpg?v=1640281242',
},
{
    gender:'female',
    category:'toner',
    title:'Vaimal One Step Clarifying Facial Toner For Acne Prone Skin',
    strickedPrice:399,
    price:359,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Vaimal-One-Step-Clarifying-Facial-Toner-For-Acne-Prone-Skin_400x400.jpg?v=1640281184',
},
{
    gender:'male',
    category:'toner',
    title:'Dyuth Sebum Balancing Facial Toner For Oily Skin',
    strickedPrice:399,
    price:359,
    image:'https://cdn.shopify.com/s/files/1/0037/7690/5283/products/Dyuth-Sebum-Balancing-Facial-Toner-For-Oily-Skin_400x400.jpg?v=1640281212',
}];

localStorage.setItem('Product',JSON.stringify(ProductArr));
function filterProduct(ProductList,gen,cat){
    let newArr=ProductList.filter((ele)=>{
        if(ele.gender==gen && ele.category==cat){
            return ele;
        }
    });
    console.log("first",newArr)
    console.log(gen,  cat);
    localStorage.setItem('Filtered_Product',JSON.stringify(newArr));
}


export {display,show,filterProduct};