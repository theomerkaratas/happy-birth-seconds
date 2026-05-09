// ==========================================
// CONFIGURATION
// ==========================================
// Enter the birth date and time below.
// Format: YYYY, MM, DD, HH, MM, SS
// Note: Month is 0-indexed (0 = January, 11 = December)
const CONFIG = {
    birthYear: 2002,
    birthMonth: 11, // December
    birthDay: 24,
    birthHour: 17,
    birthMinute: 15,
    birthSecond: 0,
    decimalPlaces: 7 // Number of decimal places to show for the age
};

// ==========================================
// QUOTES
// ==========================================
// Add or modify quotes here.
// Parameters:
// - quote: The text of the quote (can include HTML like <br> for line breaks)
// - name: The author of the quote (leave empty for dialogue)
// - color: The CSS class for the card color (e.g., 'yaren', 'omer', 'dialogue')
const QUOTES = [
    { quote: "Senin şu işlere anneni karıştırman yok mı", name: "Yaren", color: "yaren" },
    { quote: "Hayatım sen kominist gibisin. Teoride güzel.", name: "Yaren", color: "yaren" },
    { quote: "Radyoaktif ortamda her türlü mutasyona yer var", name: "Ömer", color: "omer" },
    { quote: "İki ev de kötüydü ama birinde seninleydim", name: "Yaren", color: "yaren" },
    { quote: "Rock'n roll BİT. Tİ.", name: "Yaren", color: "yaren" },
    { quote: "Bu hesaba göre benim 4 defa kıtlatılmam gerekiyor", name: "Ömer", color: "omer" },
    { quote: "Bu arada ben bir şey yemeden önce elimi yıkarım", name: "Ömer", color: "omer" },
    { quote: "- Yaa Yaren çok tatlısın<br><br>- Siktir git lan sen tatlısın", name: "", color: "dialogue" },
    { quote: "Hayatım, İsa gibi kadınsın", name: "Ömer", color: "omer" },
    { quote: "Planımın üstüne plan yaptın", name: "Yaren", color: "yaren" },
    { quote: "Hayatım sen zaten bi dikilirsin ben yıkılırım", name: "Ömer", color: "omer" },
    { quote: "Yunus balığının içine hiç biri girmiyor yavrum", name: "Ömer", color: "omer" },
    { quote: "Bu sabah tam bir objeydin benim için", name: "Yaren", color: "yaren" },
    { quote: "ben senin hayallerini gerçekleştireceğime and içmişim", name: "Ömer", color: "omer" },
    { quote: "Seversin tabi", name: "Yaren", color: "yaren" },
    { quote: "+elimle yapmasam anlamıcaktın<br><br>-sanki naptın ki elinle? Şöyle yaptın böyle yaptın", name: "", color: "dialogue" },
    { quote: "biz bu konuyu konuşursak sevişemeyiz", name: "Yaren", color: "yaren" },
    { quote: "gelirken yoğurt alır mısın", name: "Yaren", color: "yaren" },
    { quote: "hastanım", name: "Ömer", color: "omer" },
    { quote: "Korkular… Sonraki hedefiniz Akdeniz ileri", name: "Yaren", color: "yaren" },
    { quote: "Korkunun Ömer’e faydası yok", name: "Yaren", color: "yaren" },
    { quote: "Gün doğmadan Ömer korkar", name: "Yaren", color: "yaren" },
    { quote: "Akmasa da korkar", name: "Yaren", color: "yaren" },
    { quote: "Ömer düştüğü yerden korkar", name: "Yaren", color: "yaren" },
    { quote: "Bir korkuyu bin kişi ister Ömer alır", name: "Yaren", color: "yaren" },
    { quote: "Bir varmış bir korkmuş", name: "Yaren", color: "yaren" },
    { quote: "Ömer’den korkan Ömer gibi korksun", name: "Yaren", color: "yaren" },
    { quote: "Korkunun Ezel’e faydası yok", name: "Yaren", color: "yaren" },
    { quote: "Sen farklı bi tür yavşaksın", name: "Yaren", color: "yaren" },
    { quote: "baklavada gurur olmaz", name: "Yaren", color: "yaren" }
];
