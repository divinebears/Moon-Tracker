// ============================================
// MOON MANSIONS DATA
// ============================================
const MOON_MANSIONS = [
    { number: 1, name: "Al-Sharatain", startDegree: 0, essence: "Movement, change, beginning. Burst of energy. Use of force.", goodFor: "Traveling, healing. Beginnings. Doing business. Gardening. Taking care of hair and nails.", badFor: "Love and friendship. Hiring employees." },
    { number: 2, name: "Al-Butain", startDegree: 12.857, essence: "Effort, courage, will and energy. Conflict.", goodFor: "Trade and finding treasures. Seeking favor from those in a position of authority. Sowing seeds. Traveling by land. Using fire, hunting.", badFor: "Love and friendship. Traveling by water. Being passive. Planting trees." },
    { number: 3, name: "Al-Thurayya", startDegree: 25.714, essence: "Abundance, prosperity, success, determination. Great capacity for work.", goodFor: "Art and creativity. Love. Using fire, hunting. Work and study. Business and commerce. Alchemy.", badFor: "Marriage, travel by water, friendship, gardening." },
    { number: 4, name: "Al-Dabaran", startDegree: 38.571, essence: "Enmity, struggle, conflict, argument, anger. Violent passion.", goodFor: "Work, craftsmanship, trade. Defeating enemies, removing obstacles.", badFor: "Marriage, friendship. Real estate, building. Wells and mines. Traveling by sea." },
    { number: 5, name: "Al-Haqa", startDegree: 51.429, essence: "Essentially benefic. Focus on mind and intellect.", goodFor: "Studies and other intellectual activities. Artistic activities. Seeking a favour from a superior. Traveling, especially by water. Return from a journey. Washing and cutting hair.", badFor: "Social activities, collective work." },
    { number: 6, name: "Al-Hana", startDegree: 64.286, essence: "Attraction, but also opposition.", goodFor: "Love and friendship, relationships. Business. Making alliances.", badFor: "Gardening. Healing." },
    { number: 7, name: "Al-Dhira", startDegree: 77.143, essence: "Success, abundance, trust.", goodFor: "Business and trade. Obtaining the favour of superiors. Love, friendship. Healing. Washing and cutting hair.", badFor: "Law and justice." },
    { number: 8, name: "Al-Nathrah", startDegree: 90, essence: "Love, power, victory.", goodFor: "Love and marriage. Family life, friendship. Achievement of a goal. Travel by land. Healing.", badFor: "Hiring employees." },
    { number: 9, name: "Al-Tarf", startDegree: 102.857, essence: "Disappointment, discord. Defence.", goodFor: "Defending yourself from attacks.", badFor: "Health. Travel. Love and friendship. Gardening." },
    { number: 10, name: "Al-Jabhah", startDegree: 115.714, essence: "Recovery. Benevolence. Help against enemies.", goodFor: "Love and friendship. Social activities. Studies. Health, spirituality. Building.", badFor: "Traveling. Abuse of drugs and medications." },
    { number: 11, name: "Al-Zubrah", startDegree: 128.571, essence: "Power, gain and respect.", goodFor: "Profit and gain. Marriage. Travel. Promotion, making a request to a person in authority. Gardening. Cutting hair. Building. Actions that require courage.", badFor: "Health of women." },
    { number: 12, name: "Al-Sarfah", startDegree: 141.429, essence: "Conflict and confrontation. Obstacles. Rich harvest.", goodFor: "Gardening, agriculture, building. Sending messages. Service and work for others.", badFor: "Marriage, personal relationships. Sea journeys." },
    { number: 13, name: "Al-Awwa", startDegree: 154.286, essence: "Achievement of desire. Increase. Benevolence.", goodFor: "Love, especially sexual love. Trade and finances. Beginning of creative projects. Traveling. Gardening. Healing. Building. Cutting and washing hair.", badFor: "Overeating." },
    { number: 14, name: "Al-Simak", startDegree: 167.143, essence: "Movement, improvement, transition.", goodFor: "Romantic love, friendship. Moving house, leaving a job or a relationship. Healing. Traveling by sea. Gardening.", badFor: "Marriage. Traveling by land." },
    { number: 15, name: "Al-Ghafr", startDegree: 180, essence: "Prosperity. Discord. Focus on the material.", goodFor: "Business, money, wealth. Treasure hunting.", badFor: "Love and romantic relationships. Family matters. Traveling." },
    { number: 16, name: "Al-Zubana", startDegree: 192.857, essence: "Wealth and prosperity, but no love.", goodFor: "Trade, business, wealth, prosperity.", badFor: "Love, relationships. Traveling. Healing. Gardening." },
    { number: 17, name: "Al-Iklil", startDegree: 205.714, essence: "Prevented loss. Friendship.", goodFor: "Financial security. Friendship. Love and marriage. Building. Promotion. Healing. Cutting hair.", badFor: "Traveling. Risky commercial operations." },
    { number: 18, name: "Al-Qalb", startDegree: 218.571, essence: "Impending danger. Defence.", goodFor: "Building, farming. Treatment of stomach. Exposing enemies.", badFor: "Almost anything. Family matters. Excessive eating, or eating an unknown food." },
    { number: 19, name: "Al-Shaulah", startDegree: 231.429, essence: "Battle and besiegement. Loss and sadness.", goodFor: "Farming and gardening. Aggressive actions. Hunting.", badFor: "Business and commerce. Friendship. Family matters. Traveling by sea." },
    { number: 20, name: "Al-Na'am", startDegree: 244.286, essence: "Concentrated and controlled energy. Passions.", goodFor: "Travelling by land, collective effort and work. Dealing with animals, hunting. Building.", badFor: "Marriage. Financial matters." },
    { number: 21, name: "Al-Baldah", startDegree: 257.143, essence: "Enmity, argument and conflict.", goodFor: "Farming and gardening, building. Healing. Travel. Earnings.", badFor: "Marriage and personal relationships. Hiring employees." },
    { number: 22, name: "Sa'd Al-Dhabih", startDegree: 270, essence: "Speed, escape. Personal power.", goodFor: "Healing. Traveling. Escaping from difficult situations.", badFor: "Marriage. Financial matters, trade. Hiring employees." },
    { number: 23, name: "Sa'd Bula", startDegree: 282.857, essence: "Conflict, separation, freedom, healing.", goodFor: "Healing. Divorce. Obtaining freedom.", badFor: "Marriage and personal relationships." },
    { number: 24, name: "Sa'ad Al-Su'ud", startDegree: 295.714, essence: "Nurture and nutrition. Fulfilment.", goodFor: "Starting a new project. Love and marriage. Increasing income, commerce and finances. Building.", badFor: "Those in power. Travel by water." },
    { number: 25, name: "Sa'd Al-Akhbiyah", startDegree: 308.571, essence: "Growth and protection. Revenge.", goodFor: "Farming and gardening, protection of plants and crops. Studies and intellectual activities.", badFor: "Friendship, marriage. Conception and pregnancy." },
    { number: 26, name: "Al-Fargh Al-Awwal", startDegree: 321.429, essence: "Love and affection. Union.", goodFor: "Love and marriage, friendship. Health and healing. Traveling by land. Farming and gardening. Commerce.", badFor: "Sea journeys. Building." },
    { number: 27, name: "Al-Fargh Al-Thani", startDegree: 334.286, essence: "Income, connection, mischief.", goodFor: "Business and commerce. Healing. Farming and gardening.", badFor: "Building. Travel by sea. Starting a new project." },
    { number: 28, name: "Batn Al-Hut", startDegree: 347.143, essence: "Guidance and completion. Fruition.", goodFor: "Marriage. Business and commerce. Farming and gardening. Traveling.", badFor: "Health." }
];

// ============================================
// ZODIAC SIGNS DATA
// ============================================
const ZODIAC_SIGNS = [
    { name: "Aries", emoji: "♈", element: "fire" },
    { name: "Taurus", emoji: "♉", element: "earth" },
    { name: "Gemini", emoji: "♊", element: "air" },
    { name: "Cancer", emoji: "♋", element: "water" },
    { name: "Leo", emoji: "♌", element: "fire" },
    { name: "Virgo", emoji: "♍", element: "earth" },
    { name: "Libra", emoji: "♎", element: "air" },
    { name: "Scorpio", emoji: "♏", element: "water" },
    { name: "Sagittarius", emoji: "♐", element: "fire" },
    { name: "Capricorn", emoji: "♑", element: "earth" },
    { name: "Aquarius", emoji: "♒", element: "air" },
    { name: "Pisces", emoji: "♓", element: "water" }
];

// ============================================
// ZODIAC SIGN EXPLANATIONS
// ============================================
const ZODIAC_EXPLANATIONS = {
    "Aries": "An increase of activity, impetuosity, striving, and energetic action.\n\nThis Moon favors occupations which demand courage, decisiveness, swiftness and initiative, but anything which requires patience, diligence and diplomacy is likely to decline now.\n\nIt is a good time for athletics, and for solving problems by brainstorming.\n\nDental visits are not recommended on the Aries Moon.",
    "Taurus": "Patience, diligence, perseverance and practicality are on the increase.\n\nThe Moon in Taurus favors occupations which demand prolonged and persistent effort, but it is also good for complete rest in comfort and coziness.\n\nIt is a good time to treat plants. It is best to avoid undertaking anything which requires quickness, decisiveness and quick-wittedness.",
    "Gemini": "Sociability, cheerfulness and quick-wittedness are on the increase, and there is an interest in all kinds of information.\n\nThe Moon in Gemini favors study, intellectual pursuits, acquaintances, conferences and gatherings. However, heightened changeability and scattering your interests can prevent you from getting definite, tangible results.",
    "Cancer": "Increased emotions, vulnerability and touchiness.\n\nYour need for seclusion could become quite strong, and there is a desire to communicate only with those closest to you.\n\nIt is not a good idea to deal with large groups of people, or to appear on stage.\n\nYou may also want to care for others, or have others look after you.\n\nEmotional difficulties may also be an obstacle to business success.",
    "Leo": "The desire to be noticeable, appreciated, and to feel you are the centre of other people's attention will be dominant. Your emotions will be expressed vividly and openly.\n\nThis is a good time to perform and appear on stage, to play, create and do everything which inspires you and lets you express your inner self.",
    "Virgo": "Attention towards details is on the increase, with a tendency to fault-finding, cleanliness and neatness.\n\nIt is a good time to undertake routine, painstaking work, and to search for and correct errors.\n\nYour body may be more intolerant of low-grade food and harmful substances, and this is a good day to begin a diet.",
    "Libra": "Increased sociability, interest in new acquaintances, a desire for mutual understanding.\n\nPartnerships are in focus. Good for social gatherings, celebrations, business meetings and a romantic rendezvous.\n\nHowever, your ability to make decisions suffers because people are prone to doubts and hesitation now.",
    "Scorpio": "An emotionally difficult time. There is increased jealousy, greediness, envy and other negative feelings. The colors of the world turn black and white.\n\nSexuality and sensuality go up and strong, powerful emotions run high, whilst diplomacy and tact will noticeably decline. However, it is a good time for any occupation which needs intensity and total devotion.",
    "Sagittarius": "Generosity, openness, optimism and the desire to give advice and share experience are all increased.\n\nThere is a heightened interest in travel and foreign countries, and any activities and recreations taking place in the open air.\n\nIt is a suitable time for large-scale plans but not for any occupations which require attention to detail.",
    "Capricorn": "There is an increase in formality, strictness and exactitude, with a tendency to reserve and distance.\n\nRules and regulations are dominant.\n\nIt is a suitable time for all activities which require extra responsibility and discipline, but you shouldn't rely on someone's receptivity or emotional pliability.",
    "Aquarius": "There is an increased interest in knowledge, and a need to communicate with like minded individuals.\n\nAt the same time, your desire for freedom and independence is strengthened, and you will want to establish your own rules.\n\nIt is a good period for reading, study and scientific pursuits. However, jobs which bore you, will go from bad to worse now.",
    "Pisces": "This brings an increase of emotions and a receptivity to other peoples' feelings.\n\nYour emotions predominate over common sense, so it is better to do things which require imagination and inspiration, rather than reason and cool logic.\n\nYour body may be more responsive than usual to alcohol, drugs and medicines, so beware of overdoses."
};

// ============================================
// MOON PHASE EXPLANATIONS
// ============================================
const PHASE_EXPLANATIONS = {
    "New Moon": "A time of lull, the completion of old activities and the preparation of new ones. Everything is in decline now - life energy, emotions and physiological activity.\n\nFor this reason, any projects which require significant effort are not advisable now. This is an inauspicious time for people with low blood pressure and those prone to depression.",
    "Waxing Crescent": "An auspicious time for affairs and businesses which are at an expansive stage of development, as well as for new beginnings.\n\nA growth phase: stimulate the growth of plants which bear fruit above the earth now, and cut hair to accelerate its growth.",
    "First Quarter": "A stressful period of time when there is a strong desire to accomplish something, to change, and to show oneself. However, before undertaking anything, first stop and think: is it really needed?\n\nObstacles multiply at this time and contradictions sharpen. Plans developed under this influence often turn out to be unrealistic because people tend to overvalue their abilities.",
    "Waxing Gibbous": "An auspicious time for affairs and businesses which are at an expansive stage of development, as well as for new beginnings.\n\nA growth phase: stimulate the growth of plants which bear fruit above the earth now, and cut hair to accelerate its growth.",
    "Full Moon": "A period of excess when everything in nature brims over. Emotions, psychic energy, physiological activity - everything is at its maximum.\n\nThis is the time of increased creativity, but with those who are prone to high blood pressure, epilepsy or over excitement, this Full Moon period can be problematic.",
    "Waning Gibbous": "The waning Moon is most beneficial for matters at a stage of consolidation, conservation and completion. It hampers growth and helps to remove anything not desirable.\n\nCutting hair now will make it grow more slowly. Plant or replant plants which have fruits under the ground.",
    "Last Quarter": "A stressful and unsettled period. Your ambitions are being stirred up and there is a desire to do something very important and show everyone how cool you are.\n\nHowever, the best way forward is to think thoroughly before doing anything and to direct your energy towards jobs planned earlier, rather than ideas which have just sprung into your head now.",
    "Waning Crescent": "The waning Moon is most beneficial for matters at a stage of consolidation, conservation and completion. It hampers growth and helps to remove anything not desirable.\n\nCutting hair now will make it grow more slowly. Plant or replant plants which have fruits under the ground."
};

// ============================================
// RETROGRADE PLANETS DATA (Corrected with proper date handling)
// ============================================
const RETROGRADE_PLANETS = [
    // Mercury retrogrades 2025
    { planet: "Mercury", emoji: "☿", retroStart: new Date(2025, 2, 14), retroEnd: new Date(2025, 3, 7) }, // March 14 - April 7
    { planet: "Mercury", emoji: "☿", retroStart: new Date(2025, 6, 18), retroEnd: new Date(2025, 7, 11) }, // July 18 - Aug 11
    { planet: "Mercury", emoji: "☿", retroStart: new Date(2025, 10, 9), retroEnd: new Date(2025, 10, 29) }, // Nov 9 - Nov 29
    // Venus retrograde 2025
    { planet: "Venus", emoji: "♀", retroStart: new Date(2025, 2, 1), retroEnd: new Date(2025, 3, 12) }, // March 1 - April 12
    // Mars retrograde (spans into 2025)
    { planet: "Mars", emoji: "♂", retroStart: new Date(2024, 11, 6), retroEnd: new Date(2025, 1, 23) }, // Dec 6, 2024 - Feb 23, 2025
    // Jupiter retrograde
    { planet: "Jupiter", emoji: "♃", retroStart: new Date(2024, 9, 9), retroEnd: new Date(2025, 1, 4) }, // Oct 9, 2024 - Feb 4, 2025
    // Saturn retrograde 2025
    { planet: "Saturn", emoji: "♄", retroStart: new Date(2025, 6, 13), retroEnd: new Date(2025, 10, 27) }, // July 13 - Nov 27
    // Uranus retrograde
    { planet: "Uranus", emoji: "⛢", retroStart: new Date(2024, 8, 1), retroEnd: new Date(2025, 0, 30) }, // Sep 1, 2024 - Jan 30, 2025
    // Neptune retrograde 2025
    { planet: "Neptune", emoji: "♆", retroStart: new Date(2025, 6, 4), retroEnd: new Date(2025, 11, 10) }, // July 4 - Dec 10
    // Pluto retrograde 2025
    { planet: "Pluto", emoji: "♇", retroStart: new Date(2025, 4, 4), retroEnd: new Date(2025, 9, 13) } // May 4 - Oct 13
];

// ============================================
// CITIES DATA
// ============================================
const CITIES = [
    { name: "New York, USA", lat: 40.7128, lon: -74.0060 },
    { name: "Los Angeles, USA", lat: 34.0522, lon: -118.2437 },
    { name: "Chicago, USA", lat: 41.8781, lon: -87.6298 },
    { name: "London, UK", lat: 51.5074, lon: -0.1278 },
    { name: "Paris, France", lat: 48.8566, lon: 2.3522 },
    { name: "Berlin, Germany", lat: 52.5200, lon: 13.4050 },
    { name: "Rome, Italy", lat: 41.9028, lon: 12.4964 },
    { name: "Madrid, Spain", lat: 40.4168, lon: -3.7038 },
    { name: "Amsterdam, Netherlands", lat: 52.3676, lon: 4.9041 },
    { name: "Dubai, UAE", lat: 25.2048, lon: 55.2708 },
    { name: "Tokyo, Japan", lat: 35.6762, lon: 139.6503 },
    { name: "Beijing, China", lat: 39.9042, lon: 116.4074 },
    { name: "Shanghai, China", lat: 31.2304, lon: 121.4737 },
    { name: "Hong Kong", lat: 22.3193, lon: 114.1694 },
    { name: "Singapore", lat: 1.3521, lon: 103.8198 },
    { name: "Sydney, Australia", lat: -33.8688, lon: 151.2093 },
    { name: "Melbourne, Australia", lat: -37.8136, lon: 144.9631 },
    { name: "Mumbai, India", lat: 19.0760, lon: 72.8777 },
    { name: "Delhi, India", lat: 28.7041, lon: 77.1025 },
    { name: "Cairo, Egypt", lat: 30.0444, lon: 31.2357 },
    { name: "Casablanca, Morocco", lat: 33.5731, lon: -7.5898 },
    { name: "Johannesburg, South Africa", lat: -26.2041, lon: 28.0473 },
    { name: "Lagos, Nigeria", lat: 6.5244, lon: 3.3792 },
    { name: "São Paulo, Brazil", lat: -23.5505, lon: -46.6333 },
    { name: "Rio de Janeiro, Brazil", lat: -22.9068, lon: -43.1729 },
    { name: "Mexico City, Mexico", lat: 19.4326, lon: -99.1332 },
    { name: "Buenos Aires, Argentina", lat: -34.6037, lon: -58.3816 },
    { name: "Toronto, Canada", lat: 43.6532, lon: -79.3832 },
    { name: "Vancouver, Canada", lat: 49.2827, lon: -123.1207 },
    { name: "Moscow, Russia", lat: 55.7558, lon: 37.6173 },
    { name: "Istanbul, Turkey", lat: 41.0082, lon: 28.9784 },
    { name: "Bangkok, Thailand", lat: 13.7563, lon: 100.5018 },
    { name: "Jakarta, Indonesia", lat: -6.2088, lon: 106.8456 },
    { name: "Manila, Philippines", lat: 14.5995, lon: 120.9842 },
    { name: "Seoul, South Korea", lat: 37.5665, lon: 126.9780 },
    { name: "Riyadh, Saudi Arabia", lat: 24.7136, lon: 46.6753 },
    { name: "Tehran, Iran", lat: 35.6892, lon: 51.3890 },
    { name: "Kuala Lumpur, Malaysia", lat: 3.1390, lon: 101.6869 },
    { name: "Vienna, Austria", lat: 48.2082, lon: 16.3738 },
    { name: "Zurich, Switzerland", lat: 47.3769, lon: 8.5417 }
];

// ============================================
// GLOBAL STATE
// ============================================
let LAT = 33.5731;
let LON = -7.5898;
let locationName = "Casablanca, Morocco";
let selectedDate = new Date();
let currentMonth = new Date();
let aspectViewDate = new Date();
let currentAspectType = null;
let dayDialogDate = null;

// ============================================
// UTILITY FUNCTIONS
// ============================================
function toJulianDay(date) {
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate() + (date.getHours() + date.getMinutes() / 60 + date.getSeconds() / 3600) / 24;
    let jy = y;
    let jm = m;
    if (m <= 2) {
        jy -= 1;
        jm += 12;
    }
    const a = Math.floor(jy / 100);
    const b = 2 - a + Math.floor(a / 4);
    return Math.floor(365.25 * (jy + 4716)) + Math.floor(30.6001 * (jm + 1)) + d + b - 1524.5;
}

function getMoonLongitude(date) {
    const jd = toJulianDay(date);
    const T = (jd - 2451545.0) / 36525;
    
    // Mean elements with higher precision
    let Lp = 218.3164477 + 481267.88123421 * T - 0.0015786 * T * T + T * T * T / 538841;
    let D = 297.8501921 + 445267.1114034 * T - 0.0018819 * T * T + T * T * T / 545868;
    let M = 357.5291092 + 35999.0502909 * T - 0.0001536 * T * T;
    let Mp = 134.9633964 + 477198.8675055 * T + 0.0087414 * T * T + T * T * T / 69699;
    let F = 93.2720950 + 483202.0175233 * T - 0.0036539 * T * T;
    
    const toRad = deg => deg * Math.PI / 180;
    
    // Main perturbations
    let longitude = Lp;
    longitude += 6.288774 * Math.sin(toRad(Mp));
    longitude += 1.274027 * Math.sin(toRad(2 * D - Mp));
    longitude += 0.658314 * Math.sin(toRad(2 * D));
    longitude += 0.213618 * Math.sin(toRad(2 * Mp));
    longitude -= 0.185116 * Math.sin(toRad(M));
    longitude -= 0.114332 * Math.sin(toRad(2 * F));
    longitude += 0.058793 * Math.sin(toRad(2 * D - 2 * Mp));
    longitude += 0.057066 * Math.sin(toRad(2 * D - M - Mp));
    longitude += 0.053322 * Math.sin(toRad(2 * D + Mp));
    longitude += 0.045758 * Math.sin(toRad(2 * D - M));
    longitude -= 0.040923 * Math.sin(toRad(M - Mp));
    longitude -= 0.034720 * Math.sin(toRad(D));
    longitude -= 0.030383 * Math.sin(toRad(M + Mp));
    longitude += 0.015327 * Math.sin(toRad(2 * D - 2 * F));
    longitude -= 0.012528 * Math.sin(toRad(Mp + 2 * F));
    longitude += 0.010980 * Math.sin(toRad(Mp - 2 * F));
    
    return ((longitude % 360) + 360) % 360;
}

function getSunLongitude(date) {
    const jd = toJulianDay(date);
    const T = (jd - 2451545.0) / 36525;
    const L0 = (280.46646 + 36000.76983 * T + 0.0003032 * T * T) % 360;
    const M = (357.52911 + 35999.05029 * T - 0.0001537 * T * T) % 360;
    const toRad = deg => deg * Math.PI / 180;
    const C = (1.914602 - 0.004817 * T) * Math.sin(toRad(M)) + 0.019993 * Math.sin(toRad(2 * M));
    return ((L0 + C) % 360 + 360) % 360;
}

function getMoonPhase(date) {
    const moonLong = getMoonLongitude(date);
    const sunLong = getSunLongitude(date);
    let phase = ((moonLong - sunLong) % 360 + 360) % 360;
    return phase;
}

function getIllumination(date) {
    const phase = getMoonPhase(date);
    const illumination = (1 - Math.cos(phase * Math.PI / 180)) / 2 * 100;
    return Math.round(illumination);
}

function getPhaseInfo(date) {
    const phase = getMoonPhase(date);
    if (phase < 11.25) return { name: "New Moon", emoji: "🌑", index: 0 };
    if (phase < 78.75) return { name: "Waxing Crescent", emoji: "🌒", index: 1 };
    if (phase < 101.25) return { name: "First Quarter", emoji: "🌓", index: 2 };
    if (phase < 168.75) return { name: "Waxing Gibbous", emoji: "🌔", index: 3 };
    if (phase < 191.25) return { name: "Full Moon", emoji: "🌕", index: 4 };
    if (phase < 258.75) return { name: "Waning Gibbous", emoji: "🌖", index: 5 };
    if (phase < 281.25) return { name: "Last Quarter", emoji: "🌗", index: 6 };
    if (phase < 348.75) return { name: "Waning Crescent", emoji: "🌘", index: 7 };
    return { name: "New Moon", emoji: "🌑", index: 0 };
}

function findExactPhaseTime(date, targetPhase) {
    // Search within 15 days before and after
    const startSearch = new Date(date);
    startSearch.setDate(startSearch.getDate() - 15);
    let closestTime = null;
    let closestDiff = Infinity;
    
    // Coarse search: every 6 hours
    for (let i = 0; i < 30 * 4; i++) {
        const checkTime = new Date(startSearch.getTime() + i * 6 * 60 * 60 * 1000);
        const phase = getMoonPhase(checkTime);
        let diff = Math.abs(phase - targetPhase);
        if (diff > 180) diff = 360 - diff;
        if (diff < closestDiff) {
            closestDiff = diff;
            closestTime = checkTime;
        }
    }
    
    // Fine search: binary search for exact moment
    if (closestTime) {
        let low = new Date(closestTime.getTime() - 6 * 60 * 60 * 1000);
        let high = new Date(closestTime.getTime() + 6 * 60 * 60 * 1000);
        for (let i = 0; i < 20; i++) {
            const mid = new Date((low.getTime() + high.getTime()) / 2);
            const phase = getMoonPhase(mid);
            let diff = phase - targetPhase;
            if (diff > 180) diff -= 360;
            if (diff < -180) diff += 360;
            if (Math.abs(diff) < 0.001) {
                return mid;
            }
            if (diff > 0) {
                high = mid;
            } else {
                low = mid;
            }
        }
        return new Date((low.getTime() + high.getTime()) / 2);
    }
    return null;
}

function getZodiacSign(longitude) {
    const signIndex = Math.floor(longitude / 30);
    const degree = longitude % 30;
    return {
        sign: ZODIAC_SIGNS[signIndex],
        degree: degree.toFixed(1)
    };
}

// ============================================
// IMPROVED ZODIAC SIGN TIMING CALCULATION
// ============================================
function findSignTransitions(date) {
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);
    
    const transitions = [];
    let currentTime = new Date(startOfDay);
    let lastSignIndex = Math.floor(getMoonLongitude(currentTime) / 30);
    
    transitions.push({
        sign: ZODIAC_SIGNS[lastSignIndex],
        signIndex: lastSignIndex,
        startTime: new Date(startOfDay),
        endTime: null
    });
    
    // Check every 15 minutes for sign changes
    const step = 15 * 60 * 1000;
    while (currentTime < endOfDay) {
        currentTime = new Date(currentTime.getTime() + step);
        const moonLong = getMoonLongitude(currentTime);
        const signIndex = Math.floor(moonLong / 30);
        
        if (signIndex !== lastSignIndex) {
            // Binary search for exact transition time
            let low = currentTime.getTime() - step;
            let high = currentTime.getTime();
            
            for (let i = 0; i < 15; i++) {
                const mid = Math.floor((low + high) / 2);
                const midLong = getMoonLongitude(new Date(mid));
                const midSignIndex = Math.floor(midLong / 30);
                
                if (midSignIndex === lastSignIndex) {
                    low = mid;
                } else {
                    high = mid;
                }
            }
            
            const transitionTime = new Date(high);
            transitions[transitions.length - 1].endTime = transitionTime;
            
            transitions.push({
                sign: ZODIAC_SIGNS[signIndex],
                signIndex: signIndex,
                startTime: transitionTime,
                endTime: null
            });
            
            lastSignIndex = signIndex;
        }
    }
    
    // Close the last sign
    transitions[transitions.length - 1].endTime = endOfDay;
    
    return transitions;
}

function getSignTimingForDay(date) {
    return findSignTransitions(date);
}

function getMansion(longitude) {
    const mansionSize = 360 / 28;
    const mansionIndex = Math.floor(longitude / mansionSize);
    return MOON_MANSIONS[mansionIndex];
}

// ============================================
// IMPROVED MANSION TIMING CALCULATION
// ============================================
function findMansionTransitions(date) {
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);
    
    const mansionSize = 360 / 28;
    const transitions = [];
    let currentTime = new Date(startOfDay);
    let lastMansionIndex = Math.floor(getMoonLongitude(currentTime) / mansionSize);
    
    transitions.push({
        mansion: MOON_MANSIONS[lastMansionIndex],
        mansionIndex: lastMansionIndex,
        startTime: new Date(startOfDay),
        endTime: null
    });
    
    // Check every 15 minutes
    const step = 15 * 60 * 1000;
    while (currentTime < endOfDay) {
        currentTime = new Date(currentTime.getTime() + step);
        const moonLong = getMoonLongitude(currentTime);
        const mansionIndex = Math.floor(moonLong / mansionSize);
        
        if (mansionIndex !== lastMansionIndex) {
            // Binary search for exact transition time
            let low = currentTime.getTime() - step;
            let high = currentTime.getTime();
            
            for (let i = 0; i < 15; i++) {
                const mid = Math.floor((low + high) / 2);
                const midLong = getMoonLongitude(new Date(mid));
                const midMansionIndex = Math.floor(midLong / mansionSize);
                
                if (midMansionIndex === lastMansionIndex) {
                    low = mid;
                } else {
                    high = mid;
                }
            }
            
            const transitionTime = new Date(high);
            transitions[transitions.length - 1].endTime = transitionTime;
            
            transitions.push({
                mansion: MOON_MANSIONS[mansionIndex],
                mansionIndex: mansionIndex,
                startTime: transitionTime,
                endTime: null
            });
            
            lastMansionIndex = mansionIndex;
        }
    }
    
    // Close the last mansion
    transitions[transitions.length - 1].endTime = endOfDay;
    
    return transitions;
}

// ============================================
// IMPROVED VOID OF COURSE CALCULATION
// ============================================
// Major aspects for VOC calculation: conjunction, sextile, square, trine, opposition
const MAJOR_ASPECTS = [0, 60, 90, 120, 180];
const ASPECT_ORB = 1; // 1 degree orb for exact aspect

function getPlanetLongitudes(date) {
    const jd = toJulianDay(date);
    const T = (jd - 2451545.0) / 36525;
    
    // Sun
    const sunLong = getSunLongitude(date);
    
    // More accurate planetary positions
    // Mercury
    const mercuryL = 252.2509 + 149474.0722 * T;
    const mercuryLong = ((mercuryL % 360) + 360) % 360;
    
    // Venus  
    const venusL = 181.9798 + 58519.2130 * T;
    const venusLong = ((venusL % 360) + 360) % 360;
    
    // Mars
    const marsL = 355.4330 + 19141.6964 * T;
    const marsLong = ((marsL % 360) + 360) % 360;
    
    // Jupiter
    const jupiterL = 34.3515 + 3036.3027 * T;
    const jupiterLong = ((jupiterL % 360) + 360) % 360;
    
    // Saturn
    const saturnL = 50.0774 + 1223.5110 * T;
    const saturnLong = ((saturnL % 360) + 360) % 360;
    
    return {
        sun: sunLong,
        mercury: mercuryLong,
        venus: venusLong,
        mars: marsLong,
        jupiter: jupiterLong,
        saturn: saturnLong
    };
}

function isAspecting(moonLong, planetLong, orb = ASPECT_ORB) {
    for (const aspect of MAJOR_ASPECTS) {
        let diff = Math.abs((moonLong - planetLong + 360) % 360 - aspect);
        if (diff > 180) diff = 360 - diff;
        if (diff <= orb) return true;
        
        // Check reverse
        diff = Math.abs((planetLong - moonLong + 360) % 360 - aspect);
        if (diff > 180) diff = 360 - diff;
        if (diff <= orb) return true;
    }
    return false;
}

function findLastAspect(date) {
    let searchDate = new Date(date);
    
    // Search backward up to 3 days
    for (let i = 0; i < 72 * 12; i++) { // Every 5 minutes for 3 days
        searchDate = new Date(date.getTime() - i * 5 * 60 * 1000);
        const moonLong = getMoonLongitude(searchDate);
        const planets = getPlanetLongitudes(searchDate);
        
        for (const [name, long] of Object.entries(planets)) {
            if (isAspecting(moonLong, long, 0.5)) {
                return { time: searchDate, planet: name };
            }
        }
    }
    return null;
}

function findNextSignChange(date) {
    const moonLong = getMoonLongitude(date);
    const currentSignIndex = Math.floor(moonLong / 30);
    
    let searchDate = new Date(date);
    // Search forward up to 3 days
    for (let i = 0; i < 72 * 12; i++) {
        searchDate = new Date(date.getTime() + i * 5 * 60 * 1000);
        const long = getMoonLongitude(searchDate);
        const signIndex = Math.floor(long / 30);
        
        if (signIndex !== currentSignIndex) {
            // Binary search for exact time
            let low = searchDate.getTime() - 5 * 60 * 1000;
            let high = searchDate.getTime();
            
            for (let j = 0; j < 15; j++) {
                const mid = Math.floor((low + high) / 2);
                const midLong = getMoonLongitude(new Date(mid));
                const midSignIndex = Math.floor(midLong / 30);
                
                if (midSignIndex === currentSignIndex) {
                    low = mid;
                } else {
                    high = mid;
                }
            }
            return new Date(high);
        }
    }
    return null;
}

function getVoidOfCourseForDay(date) {
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);
    
    const vocPeriods = [];
    let currentTime = new Date(startOfDay);
    
    // Check every 10 minutes for VOC periods
    while (currentTime < endOfDay) {
        const moonLong = getMoonLongitude(currentTime);
        const planets = getPlanetLongitudes(currentTime);
        
        let isAspectingAny = false;
        for (const [name, long] of Object.entries(planets)) {
            if (isAspecting(moonLong, long, 1)) {
                isAspectingAny = true;
                break;
            }
        }
        
        if (!isAspectingAny) {
            // We're in VOC - find when it started (last aspect) and when it ends (sign change)
            const lastAspect = findLastAspect(currentTime);
            const nextSignChange = findNextSignChange(currentTime);
            
            if (lastAspect && nextSignChange) {
                const vocStart = lastAspect.time;
                const vocEnd = nextSignChange;
                
                // Only add if this VOC period intersects with today
                if (vocStart < endOfDay && vocEnd > startOfDay) {
                    const displayStart = vocStart < startOfDay ? startOfDay : vocStart;
                    const displayEnd = vocEnd > endOfDay ? endOfDay : vocEnd;
                    
                    // Check if we already have this period (within 30 min)
                    const exists = vocPeriods.some(p => 
                        Math.abs(p.start.getTime() - displayStart.getTime()) < 30 * 60 * 1000
                    );
                    
                    if (!exists) {
                        vocPeriods.push({
                            start: displayStart,
                            end: displayEnd,
                            fullStart: vocStart,
                            fullEnd: vocEnd,
                            lastAspectPlanet: lastAspect.planet
                        });
                    }
                }
            }
            
            // Skip ahead past this VOC period
            if (nextSignChange && nextSignChange > currentTime) {
                currentTime = new Date(nextSignChange.getTime() + 10 * 60 * 1000);
            } else {
                currentTime = new Date(currentTime.getTime() + 10 * 60 * 1000);
            }
        } else {
            currentTime = new Date(currentTime.getTime() + 10 * 60 * 1000);
        }
    }
    
    return vocPeriods;
}

function getRetrogradePlanets(date) {
    // Normalize the date to midnight for comparison
    const checkDate = new Date(date);
    checkDate.setHours(12, 0, 0, 0);
    
    return RETROGRADE_PLANETS.filter(p => {
        const start = new Date(p.retroStart);
        start.setHours(0, 0, 0, 0);
        const end = new Date(p.retroEnd);
        end.setHours(23, 59, 59, 999);
        return checkDate >= start && checkDate <= end;
    });
}

function isMercuryRetrograde(date) {
    const checkDate = new Date(date);
    checkDate.setHours(12, 0, 0, 0);
    
    return RETROGRADE_PLANETS.filter(p => {
        if (p.planet !== "Mercury") return false;
        const start = new Date(p.retroStart);
        start.setHours(0, 0, 0, 0);
        const end = new Date(p.retroEnd);
        end.setHours(23, 59, 59, 999);
        return checkDate >= start && checkDate <= end;
    }).length > 0;
}

function getMoonRiseSet(date) {
    // Approximate calculation
    const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const phase = getMoonPhase(date) / 360;
    const latFactor = Math.cos(LAT * Math.PI / 180);
    
    const riseHour = (6 + phase * 24 + Math.sin(dayOfYear * 0.0172) * 2 * latFactor) % 24;
    const setHour = (riseHour + 12 + latFactor * 2) % 24;
    
    const rise = new Date(date);
    rise.setHours(Math.floor(riseHour), Math.floor((riseHour % 1) * 60), 0);
    
    const set = new Date(date);
    set.setHours(Math.floor(setHour), Math.floor((setHour % 1) * 60), 0);
    
    return { rise, set };
}

// ============================================
// FORMATTING FUNCTIONS
// ============================================
function formatTime(date) {
    if (!date) return "--:--";
    return date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });
}

function formatDate(date) {
    return date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function formatShortDate(date) {
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
    });
}

function formatFullDateTime(date) {
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });
}

// ============================================
// IP-BASED LOCATION
// ============================================
async function getLocationByIP() {
    try {
        // Try multiple free IP geolocation services
        const services = [
            'https://ipapi.co/json/',
            'https://ip-api.com/json/',
            'https://ipwho.is/'
        ];
        
        for (const service of services) {
            try {
                const response = await fetch(service);
                if (response.ok) {
                    const data = await response.json();
                    
                    // Handle different response formats
                    let lat, lon, city, country;
                    
                    if (data.latitude && data.longitude) {
                        lat = data.latitude;
                        lon = data.longitude;
                        city = data.city;
                        country = data.country_name || data.country;
                    } else if (data.lat && data.lon) {
                        lat = data.lat;
                        lon = data.lon;
                        city = data.city;
                        country = data.country;
                    }
                    
                    if (lat && lon) {
                        return {
                            lat: lat,
                            lon: lon,
                            name: city && country ? `${city}, ${country}` : 'Your Location'
                        };
                    }
                }
            } catch (e) {
                console.log('Service failed, trying next:', service);
            }
        }
    } catch (error) {
        console.error('Could not get location by IP:', error);
    }
    return null;
}

// ============================================
// UI FUNCTIONS
// ============================================
function createStarBackground() {
    const container = document.getElementById('star-background');
    if (!container) return;
    container.innerHTML = '';
    
    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = (Math.random() * 2 + 1) + 'px';
        star.style.height = star.style.width;
        star.style.setProperty('--delay', Math.random() * 3 + 's');
        star.style.setProperty('--duration', (Math.random() * 2 + 2) + 's');
        container.appendChild(star);
    }
    
    setInterval(() => {
        if (Math.random() > 0.7) {
            createShootingStar(container);
        }
    }, 3000);
}

function createShootingStar(container) {
    const star = document.createElement('div');
    star.className = 'shooting-star';
    star.style.left = Math.random() * 70 + '%';
    star.style.top = Math.random() * 30 + '%';
    container.appendChild(star);
    setTimeout(() => star.remove(), 1000);
}

async function initLocationSelector() {
    const locationSelect = document.getElementById('location-select');
    if (!locationSelect) return;
    
    // Add "Detect Location" option first
    const detectOption = document.createElement('option');
    detectOption.value = 'detect';
    detectOption.textContent = '📍 Detecting your location...';
    locationSelect.appendChild(detectOption);
    
    // Add all cities
    CITIES.forEach((city, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = city.name;
        locationSelect.appendChild(option);
    });
    
    // Try to get location by IP
    const ipLocation = await getLocationByIP();
    
    if (ipLocation) {
        // Update the detect option with the found location
        detectOption.textContent = `📍 ${ipLocation.name} (Auto-detected)`;
        detectOption.dataset.lat = ipLocation.lat;
        detectOption.dataset.lon = ipLocation.lon;
        detectOption.dataset.name = ipLocation.name;
        
        // Check if there's a saved preference
        const savedLocation = localStorage.getItem('selectedLocation');
        if (!savedLocation || savedLocation === 'detect') {
            // Use auto-detected location
            LAT = ipLocation.lat;
            LON = ipLocation.lon;
            locationName = ipLocation.name;
            locationSelect.value = 'detect';
            updateDailyView();
            updateMonthlyCalendar();
        } else {
            // Use saved location
            const savedIndex = parseInt(savedLocation);
            if (savedIndex >= 0 && savedIndex < CITIES.length) {
                locationSelect.value = savedIndex;
                updateLocation(savedIndex);
            }
        }
    } else {
        // Could not detect, remove detect option and use default
        detectOption.textContent = '📍 Location detection unavailable';
        const savedLocation = localStorage.getItem('selectedLocation');
        if (savedLocation && savedLocation !== 'detect') {
            const savedIndex = parseInt(savedLocation);
            if (savedIndex >= 0 && savedIndex < CITIES.length) {
                locationSelect.value = savedIndex;
                updateLocation(savedIndex);
            }
        } else {
            // Default to Casablanca
            const casablancaIndex = CITIES.findIndex(c => c.name.includes('Casablanca'));
            if (casablancaIndex >= 0) {
                locationSelect.value = casablancaIndex;
                updateLocation(casablancaIndex);
            }
        }
    }
    
    locationSelect.addEventListener('change', (e) => {
        const value = e.target.value;
        if (value === 'detect') {
            const option = locationSelect.querySelector('option[value="detect"]');
            if (option && option.dataset.lat) {
                LAT = parseFloat(option.dataset.lat);
                LON = parseFloat(option.dataset.lon);
                locationName = option.dataset.name;
                localStorage.setItem('selectedLocation', 'detect');
                updateDailyView();
                updateMonthlyCalendar();
            }
        } else {
            const index = parseInt(value);
            updateLocation(index);
            localStorage.setItem('selectedLocation', index);
        }
    });
}

function updateLocation(cityIndex) {
    const city = CITIES[cityIndex];
    if (city) {
        LAT = city.lat;
        LON = city.lon;
        locationName = city.name;
        updateDailyView();
        updateMonthlyCalendar();
    }
}

function updateCurrentTime() {
    const now = new Date();
    document.getElementById('current-date').textContent = formatDate(now);
    document.getElementById('current-time').textContent = formatTime(now);
}

function updateDailyView() {
    const date = selectedDate;
    const now = new Date();
    const isToday = date.toDateString() === now.toDateString();
    
    document.getElementById('selected-date').textContent = formatDate(date);
    document.getElementById('return-today').style.display = isToday ? 'none' : 'block';
    
    // Moon Phase
    const phaseInfo = getPhaseInfo(date);
    document.getElementById('phase-emoji').textContent = phaseInfo.emoji;
    document.getElementById('phase-name').textContent = phaseInfo.name;
    document.getElementById('illumination').textContent = getIllumination(date) + '% illuminated';
    
    // Exact phase time
    const exactPhaseBox = document.getElementById('exact-phase-box');
    const phaseTargets = [0, 90, 180, 270];
    const phaseNames = ['New Moon', 'First Quarter', 'Full Moon', 'Last Quarter'];
    let nearestPhase = null;
    let nearestDiff = Infinity;
    
    phaseTargets.forEach((target, idx) => {
        const exactTime = findExactPhaseTime(date, target);
        if (exactTime) {
            const diff = Math.abs(exactTime.getTime() - date.getTime());
            if (diff < nearestDiff && diff < 24 * 60 * 60 * 1000) {
                nearestDiff = diff;
                nearestPhase = { name: phaseNames[idx], time: exactTime };
            }
        }
    });
    
    if (nearestPhase) {
        exactPhaseBox.style.display = 'block';
        document.getElementById('exact-phase-label').textContent = nearestPhase.name + ' at';
        document.getElementById('exact-phase-time').textContent = formatTime(nearestPhase.time);
    } else {
        exactPhaseBox.style.display = 'none';
    }
    
    // Moon Rise/Set
    const riseSet = getMoonRiseSet(date);
    document.getElementById('moon-rise').textContent = formatTime(riseSet.rise);
    document.getElementById('moon-set').textContent = formatTime(riseSet.set);
    
    // Zodiac
    const moonLong = getMoonLongitude(date);
    const zodiac = getZodiacSign(moonLong);
    const signTransitions = getSignTimingForDay(date);
    
    document.getElementById('zodiac-emoji').textContent = zodiac.sign.emoji;
    document.getElementById('zodiac-name').textContent = zodiac.sign.name;
    document.getElementById('zodiac-degree').textContent = zodiac.degree + '°';
    
    // Show all zodiac signs for the day
    if (signTransitions.length > 1) {
        document.getElementById('sign-timing').textContent = `${signTransitions.length} signs today`;
    } else {
        const startDate = signTransitions[0].startTime.toDateString() === date.toDateString() ? 
            formatTime(signTransitions[0].startTime) : 'Start of day';
        const endDate = signTransitions[0].endTime.toDateString() === date.toDateString() && 
            signTransitions[0].endTime.getHours() < 23 ? 
            formatTime(signTransitions[0].endTime) : 'End of day';
        document.getElementById('sign-timing').textContent = `${startDate} - ${endDate}`;
    }
    
    // All signs container
    const allSignsContainer = document.getElementById('all-signs-container');
    if (signTransitions.length > 1) {
        allSignsContainer.innerHTML = '<div class="label" style="margin-bottom: 0.5rem;">All Moon Signs Today:</div>';
        signTransitions.forEach(trans => {
            const startStr = formatTime(trans.startTime);
            const endStr = formatTime(trans.endTime);
            const signItem = document.createElement('div');
            signItem.className = 'sign-item';
            signItem.innerHTML = `
                <span class="sign-item-name" data-sign="${trans.sign.name}">${trans.sign.emoji} ${trans.sign.name}</span>
                <span class="sign-item-time">${startStr} - ${endStr}</span>
            `;
            signItem.querySelector('.sign-item-name').addEventListener('click', () => {
                showZodiacDialog(trans.sign.name);
            });
            allSignsContainer.appendChild(signItem);
        });
        allSignsContainer.style.display = 'block';
    } else {
        allSignsContainer.style.display = 'none';
    }
    
    // Mansion
    const mansionTransitions = findMansionTransitions(date);
    const currentMansion = mansionTransitions[0].mansion;
    
    document.getElementById('mansion-number').textContent = currentMansion.number;
    document.getElementById('mansion-name').textContent = currentMansion.name;
    
    // Show timing for first mansion
    const mStartStr = formatTime(mansionTransitions[0].startTime);
    const mEndStr = formatTime(mansionTransitions[0].endTime);
    document.getElementById('mansion-timing').textContent = `${mStartStr} - ${mEndStr}`;
    
    // All mansions container
    const allMansionsContainer = document.getElementById('all-mansions-container');
    if (mansionTransitions.length > 1) {
        allMansionsContainer.innerHTML = '<div class="label" style="margin-bottom: 0.5rem;">All Moon Mansions Today:</div>';
        mansionTransitions.forEach(trans => {
            const startStr = formatTime(trans.startTime);
            const endStr = formatTime(trans.endTime);
            const mansionItem = document.createElement('div');
            mansionItem.className = 'mansion-item';
            mansionItem.innerHTML = `
                <span class="mansion-item-name">${trans.mansion.number}. ${trans.mansion.name}</span>
                <span class="mansion-item-time">${startStr} - ${endStr}</span>
            `;
            mansionItem.querySelector('.mansion-item-name').addEventListener('click', () => {
                showMansionDialog(trans.mansion);
            });
            allMansionsContainer.appendChild(mansionItem);
        });
        allMansionsContainer.style.display = 'block';
    } else {
        allMansionsContainer.style.display = 'none';
    }
    
    // Void of Course
    const vocPeriods = getVoidOfCourseForDay(date);
    const vocCard = document.getElementById('voc-card');
    const vocStatus = document.getElementById('voc-status');
    const vocText = document.getElementById('voc-text');
    const vocTiming = document.getElementById('voc-timing');
    
    if (vocPeriods.length > 0) {
        const currentVOC = vocPeriods.find(p => now >= p.start && now <= p.end);
        
        if (currentVOC && isToday) {
            vocCard.classList.add('voc-active');
            vocStatus.textContent = '⚠ Active';
            vocStatus.className = 'voc-status active';
            vocText.textContent = 'Moon is void of course';
            vocTiming.style.display = 'block';
            document.getElementById('voc-times').innerHTML = `Until ${formatTime(currentVOC.end)}`;
        } else {
            vocCard.classList.remove('voc-active');
            vocStatus.textContent = vocPeriods.length > 1 ? `${vocPeriods.length} VOC` : '1 VOC';
            vocStatus.className = 'voc-status active';
            vocText.textContent = vocPeriods.length > 1 ? 
                `${vocPeriods.length} Void of Course periods today` : 
                'Void of Course period scheduled';
            vocTiming.style.display = 'block';
            
            const vocTimesHtml = vocPeriods.map(p => 
                `<div class="voc-period-item">${formatTime(p.start)} - ${formatTime(p.end)}</div>`
            ).join('');
            document.getElementById('voc-times').innerHTML = vocTimesHtml;
        }
    } else {
        vocCard.classList.remove('voc-active');
        vocStatus.textContent = '✓ Clear';
        vocStatus.className = 'voc-status inactive';
        vocText.textContent = 'No Void of Course periods today';
        vocTiming.style.display = 'none';
    }
    
    // Retrograde Planets
    const retroPlanets = getRetrogradePlanets(date);
    const retroContainer = document.getElementById('retro-planets');
    const mercuryStatus = document.getElementById('mercury-status');
    
    if (retroPlanets.length === 0) {
        retroContainer.innerHTML = '<div class="no-retro">No planets in retrograde</div>';
    } else {
        retroContainer.innerHTML = retroPlanets.map(p => `
            <div class="retro-planet" data-planet="${p.planet}">
                <span class="retro-emoji">${p.emoji}</span>
                <div class="retro-info">
                    <div class="retro-name">${p.planet} Retrograde</div>
                    <div class="retro-dates">${formatShortDate(p.retroStart)} - ${formatShortDate(p.retroEnd)}</div>
                </div>
            </div>
        `).join('');
        
        // Add click handlers for retrograde planets
        retroContainer.querySelectorAll('.retro-planet').forEach(el => {
            el.addEventListener('click', () => {
                const planet = el.dataset.planet;
                if (planet === 'Mercury') {
                    showMercuryDialog(true);
                }
            });
        });
    }
    
    // Show Mercury direct status if not retrograde
    const mercuryRetro = isMercuryRetrograde(date);
    if (!mercuryRetro) {
        mercuryStatus.style.display = 'block';
        mercuryStatus.textContent = '☿ Mercury is Direct ✓';
        mercuryStatus.onclick = () => showMercuryDialog(false);
    } else {
        mercuryStatus.style.display = 'none';
    }
    
    // Summary - removed "moon active" reference
    const summaryGrid = document.getElementById('summary-grid');
    summaryGrid.innerHTML = `
        <div class="summary-item">
            <span class="summary-emoji">${phaseInfo.emoji}</span>
            <span class="summary-label">${phaseInfo.name}</span>
        </div>
        <div class="summary-item">
            <span class="summary-emoji">${zodiac.sign.emoji}</span>
            <span class="summary-label">Moon in ${zodiac.sign.name}</span>
        </div>
        <div class="summary-item">
            <span class="summary-emoji">🏛️</span>
            <span class="summary-label">Mansion ${currentMansion.number}</span>
        </div>
        <div class="summary-item">
            <span class="summary-emoji">${vocPeriods.length > 0 ? '⚠️' : '✓'}</span>
            <span class="summary-label">${vocPeriods.length > 0 ? vocPeriods.length + ' VOC' : 'No VOC'}</span>
        </div>
    `;
}

function updateMonthlyCalendar() {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    document.getElementById('month-title').textContent = new Date(year, month).toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric'
    });
    
    const container = document.getElementById('calendar-days');
    container.innerHTML = '';
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startOffset = firstDay.getDay();
    
    // Empty cells for days before first of month
    for (let i = 0; i < startOffset; i++) {
        const cell = document.createElement('div');
        cell.className = 'calendar-day empty';
        container.appendChild(cell);
    }
    
    // Days of month
    for (let day = 1; day <= lastDay.getDate(); day++) {
        const date = new Date(year, month, day, 12, 0, 0);
        const phaseInfo = getPhaseInfo(date);
        const signTransitions = findSignTransitions(date);
        const mansionTransitions = findMansionTransitions(date);
        
        const signEmojis = signTransitions.map(t => t.sign.emoji).join(' ');
        
        const cell = document.createElement('div');
        cell.className = 'calendar-day';
        
        const today = new Date();
        if (date.toDateString() === today.toDateString()) {
            cell.classList.add('today');
        }
        if (date.toDateString() === selectedDate.toDateString()) {
            cell.classList.add('selected');
        }
        
        cell.innerHTML = `
            <div class="day-number">${day}</div>
            <div class="day-phase">${phaseInfo.emoji}</div>
            <div class="day-signs">${signEmojis}</div>
            <div class="day-mansions">${mansionTransitions.length > 1 ? mansionTransitions.length + ' mansions' : ''}</div>
        `;
        cell.addEventListener('click', () => showDayDialog(date));
        container.appendChild(cell);
    }
}

// ============================================
// DIALOG FUNCTIONS
// ============================================
function showMansionDialog(mansion) {
    document.getElementById('dialog-mansion-name').textContent = `${mansion.number}. ${mansion.name}`;
    document.getElementById('dialog-essence').textContent = mansion.essence;
    document.getElementById('dialog-good').textContent = mansion.goodFor;
    document.getElementById('dialog-bad').textContent = mansion.badFor;
    document.getElementById('mansion-dialog').style.display = 'flex';
}

function showDayDialog(date) {
    dayDialogDate = new Date(date);
    const phaseInfo = getPhaseInfo(date);
    const moonLong = getMoonLongitude(date);
    const zodiac = getZodiacSign(moonLong);
    const mansionTransitions = findMansionTransitions(date);
    const signTransitions = findSignTransitions(date);
    const vocPeriods = getVoidOfCourseForDay(date);
    const retroPlanets = getRetrogradePlanets(date);
    
    document.getElementById('day-dialog-title').textContent = formatDate(date);
    
    document.getElementById('day-dialog-phase').innerHTML = `
        <span>${phaseInfo.emoji}</span>
        <span>${phaseInfo.name} - ${getIllumination(date)}% illuminated</span>
    `;
    
    // Show all zodiac signs
    const zodiacHtml = signTransitions.map(t => 
        `${t.sign.emoji} ${t.sign.name} (${formatTime(t.startTime)} - ${formatTime(t.endTime)})`
    ).join('<br>');
    document.getElementById('day-dialog-zodiac').innerHTML = `
        <span>${signTransitions[0].sign.emoji}</span>
        <span>Moon Sign: ${zodiacHtml}</span>
    `;
    
    // Show all mansions
    const mansionHtml = mansionTransitions.map(t => 
        `${t.mansion.number}. ${t.mansion.name} (${formatTime(t.startTime)} - ${formatTime(t.endTime)})`
    ).join('<br>');
    document.getElementById('day-dialog-mansion').innerHTML = `
        <span>🏛️</span>
        <span>${mansionHtml}</span>
    `;
    
    // Show VOC periods
    const vocHtml = vocPeriods.length > 0 ? 
        vocPeriods.map(p => `${formatTime(p.start)} - ${formatTime(p.end)}`).join('<br>') :
        'No Void of Course periods';
    document.getElementById('day-dialog-voc').innerHTML = `
        <span>${vocPeriods.length > 0 ? '⚠️' : '✓'}</span>
        <span>VOC: ${vocHtml}</span>
    `;
    
    // Show retrograde planets
    const retroHtml = retroPlanets.length > 0 ?
        retroPlanets.map(p => `${p.emoji} ${p.planet}`).join(', ') :
        'None';
    document.getElementById('day-dialog-retro').innerHTML = `
        <span>℞</span>
        <span>Retrograde: ${retroHtml}</span>
    `;
    
    const firstMansion = mansionTransitions[0].mansion;
    document.getElementById('day-dialog-essence').textContent = firstMansion.essence;
    document.getElementById('day-dialog-good').textContent = firstMansion.goodFor;
    document.getElementById('day-dialog-bad').textContent = firstMansion.badFor;
    
    document.getElementById('day-dialog').style.display = 'flex';
}

function showVOCDialog() {
    document.getElementById('voc-dialog').style.display = 'flex';
}

function showPhaseDialog(phaseName) {
    document.getElementById('phase-dialog-title').textContent = phaseName;
    document.getElementById('phase-dialog-text').textContent = PHASE_EXPLANATIONS[phaseName] || 'No explanation available.';
    document.getElementById('phase-dialog').style.display = 'flex';
}

function showZodiacDialog(signName) {
    document.getElementById('zodiac-dialog-title').textContent = `Moon in ${signName}`;
    document.getElementById('zodiac-dialog-text').textContent = ZODIAC_EXPLANATIONS[signName] || 'No explanation available.';
    document.getElementById('zodiac-dialog').style.display = 'flex';
}

function showMercuryDialog(isRetrograde) {
    document.getElementById('mercury-dialog-title').textContent = isRetrograde ? 'Mercury Retrograde' : 'Mercury Direct';
    if (isRetrograde) {
        document.getElementById('mercury-dialog-text').textContent = 
            "Mercury is retrograde.\n\nIt isn't a good time for decisions and agreements, they might be like a house built on sand. People are prone to mistakes and errors. Do not buy Mercury-related things, like computers or office equipment, as they can have hidden defects.\n\nOn the other hand, this is a good time for finding new, alternative approaches, even if they would normally seem totally crazy to you.";
    } else {
        document.getElementById('mercury-dialog-text').textContent = 
            "Mercury is direct.\n\nSo you should not blame it for your mistakes!";
    }
    document.getElementById('mercury-dialog').style.display = 'flex';
}

// ============================================
// SWIPE NAVIGATION FOR ASPECT CARDS
// ============================================
function initSwipeNavigation() {
    document.querySelectorAll('.swipeable-card').forEach(card => {
        const prevBtn = card.querySelector('.swipe-btn.prev');
        const nextBtn = card.querySelector('.swipe-btn.next');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                selectedDate = new Date(selectedDate.getTime() - 24 * 60 * 60 * 1000);
                updateDailyView();
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                selectedDate = new Date(selectedDate.getTime() + 24 * 60 * 60 * 1000);
                updateDailyView();
            });
        }
        
        // Touch swipe support
        let touchStartX = 0;
        let touchEndX = 0;
        
        card.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        card.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
        
        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    // Swiped left - next day
                    selectedDate = new Date(selectedDate.getTime() + 24 * 60 * 60 * 1000);
                } else {
                    // Swiped right - previous day
                    selectedDate = new Date(selectedDate.getTime() - 24 * 60 * 60 * 1000);
                }
                updateDailyView();
            }
        }
    });
}

// ============================================
// EVENT LISTENERS
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    createStarBackground();
    updateCurrentTime();
    updateDailyView();
    updateMonthlyCalendar();
    initLocationSelector();
    initSwipeNavigation();
    setInterval(updateCurrentTime, 60000);
    
    // Tab switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(btn.dataset.tab + '-view').classList.add('active');
        });
    });
    
    // Day navigation
    document.getElementById('prev-day').addEventListener('click', () => {
        selectedDate = new Date(selectedDate.getTime() - 24 * 60 * 60 * 1000);
        updateDailyView();
    });
    
    document.getElementById('next-day').addEventListener('click', () => {
        selectedDate = new Date(selectedDate.getTime() + 24 * 60 * 60 * 1000);
        updateDailyView();
    });
    
    document.getElementById('return-today').addEventListener('click', () => {
        selectedDate = new Date();
        updateDailyView();
    });
    
    // Month navigation
    document.getElementById('prev-month').addEventListener('click', () => {
        currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
        updateMonthlyCalendar();
    });
    
    document.getElementById('next-month').addEventListener('click', () => {
        currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
        updateMonthlyCalendar();
    });
    
    // Mansion dialog
    document.getElementById('mansion-name').addEventListener('click', () => {
        const moonLong = getMoonLongitude(selectedDate);
        const mansion = getMansion(moonLong);
        showMansionDialog(mansion);
    });
    
    document.getElementById('close-mansion-dialog').addEventListener('click', () => {
        document.getElementById('mansion-dialog').style.display = 'none';
    });
    
    document.getElementById('mansion-dialog').addEventListener('click', (e) => {
        if (e.target.id === 'mansion-dialog') {
            document.getElementById('mansion-dialog').style.display = 'none';
        }
    });
    
    // Day dialog
    document.getElementById('close-day-dialog').addEventListener('click', () => {
        document.getElementById('day-dialog').style.display = 'none';
    });
    
    document.getElementById('day-dialog').addEventListener('click', (e) => {
        if (e.target.id === 'day-dialog') {
            document.getElementById('day-dialog').style.display = 'none';
        }
    });
    
    // Expand to daily view button
    document.getElementById('expand-to-daily').addEventListener('click', () => {
        if (dayDialogDate) {
            selectedDate = new Date(dayDialogDate);
            document.getElementById('day-dialog').style.display = 'none';
            // Switch to daily tab
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            document.querySelector('.tab-btn[data-tab="daily"]').classList.add('active');
            document.getElementById('daily-view').classList.add('active');
            updateDailyView();
        }
    });
    
    // VOC dialog
    document.getElementById('voc-label').addEventListener('click', showVOCDialog);
    
    document.getElementById('close-voc-dialog').addEventListener('click', () => {
        document.getElementById('voc-dialog').style.display = 'none';
    });
    
    document.getElementById('voc-dialog').addEventListener('click', (e) => {
        if (e.target.id === 'voc-dialog') {
            document.getElementById('voc-dialog').style.display = 'none';
        }
    });
    
    // Phase dialog
    document.getElementById('phase-name').addEventListener('click', () => {
        const phaseInfo = getPhaseInfo(selectedDate);
        showPhaseDialog(phaseInfo.name);
    });
    
    document.getElementById('close-phase-dialog').addEventListener('click', () => {
        document.getElementById('phase-dialog').style.display = 'none';
    });
    
    document.getElementById('phase-dialog').addEventListener('click', (e) => {
        if (e.target.id === 'phase-dialog') {
            document.getElementById('phase-dialog').style.display = 'none';
        }
    });
    
    // Zodiac dialog
    document.getElementById('zodiac-name').addEventListener('click', () => {
        const moonLong = getMoonLongitude(selectedDate);
        const zodiac = getZodiacSign(moonLong);
        showZodiacDialog(zodiac.sign.name);
    });
    
    document.getElementById('zodiac-emoji').addEventListener('click', () => {
        const moonLong = getMoonLongitude(selectedDate);
        const zodiac = getZodiacSign(moonLong);
        showZodiacDialog(zodiac.sign.name);
    });
    
    document.getElementById('close-zodiac-dialog').addEventListener('click', () => {
        document.getElementById('zodiac-dialog').style.display = 'none';
    });
    
    document.getElementById('zodiac-dialog').addEventListener('click', (e) => {
        if (e.target.id === 'zodiac-dialog') {
            document.getElementById('zodiac-dialog').style.display = 'none';
        }
    });
    
    // Mercury dialog
    document.getElementById('close-mercury-dialog').addEventListener('click', () => {
        document.getElementById('mercury-dialog').style.display = 'none';
    });
    
    document.getElementById('mercury-dialog').addEventListener('click', (e) => {
        if (e.target.id === 'mercury-dialog') {
            document.getElementById('mercury-dialog').style.display = 'none';
        }
    });
});
