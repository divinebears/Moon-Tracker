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

const ZODIAC_EXPLANATIONS = {
    "Aries": "An increase of activity, impetuosity, striving, and energetic action. This Moon favors occupations which demand courage, decisiveness, swiftness and initiative, but anything which requires patience, diligence and diplomacy is likely to decline now. It is a good time for athletics, and for solving problems by brainstorming. Dental visits are not recommended on the Aries Moon.",
    "Taurus": "Patience, diligence, perseverance and practicality are on the increase. The Moon in Taurus favors occupations which demand prolonged and persistent effort, but it is also good for complete rest in comfort and coziness. It is a good time to treat plants. It is best to avoid undertaking anything which requires quickness, decisiveness and quick-wittedness.",
    "Gemini": "Sociability, cheerfulness and quick-wittedness are on the increase, and there is an interest in all kinds of information. The Moon in Gemini favors study, intellectual pursuits, acquaintances, conferences and gatherings. However, it can be difficult to focus on one thing for a long time.",
    "Cancer": "Increased emotions, vulnerability and touchiness. Your need for seclusion could become quite strong, and there is a desire to communicate only with those closest to you. It is not a good idea to deal with large groups of people, or to appear on stage. You may also want to care for others, or have others look after you. Emotional difficulties may also be an obstacle to business success.",
    "Leo": "The desire to be noticeable, appreciated, and to feel you are the centre of other people's attention will be dominant. Your emotions will be expressed vividly and openly. This is a good time to perform and appear on stage, to play, create and do everything which inspires you and lets you express your inner self.",
    "Virgo": "Attention towards details is on the increase, with a tendency to fault-finding, cleanliness and neatness. It is a good time to undertake routine, painstaking work, and to search for and correct errors. Your body may be more intolerant of low-grade food and harmful substances, and this is a good day to begin a diet.",
    "Libra": "Increased sociability, interest in new acquaintances, a desire for mutual understanding. Partnerships are in focus. Good for social gatherings, celebrations, business meetings and a romantic rendezvous. However, your ability to make decisions suffers because people are prone to doubts and hesitation now.",
    "Scorpio": "An emotionally difficult time. There is increased jealousy, greediness, envy and other negative feelings. The colors of the world turn black and white. Sexuality and sensuality go up and strong, powerful emotions run.",
    "Sagittarius": "Generosity, openness, optimism and the desire to give advice and share experience are all increased. There is a heightened interest in travel and foreign countries, and any activities and recreations taking place in the open air. It is a suitable time for large-scale plans but not for any occupations which require attention to detail.",
    "Capricorn": "There is an increase in formality, strictness and exactitude, with a tendency to reserve and distance. Rules and regulations are dominant. It is a suitable time for all activities which require extra responsibility and discipline, but you shouldn't rely on someone's receptivity or emotional pliability.",
    "Aquarius": "There is an increased interest in knowledge, and a need to communicate with like minded individuals. At the same time, your desire for freedom and independence is strengthened, and you will want to establish your own rules. It is a good period for reading, study and scientific pursuits. However, jobs which bore you, will go from bad to worse now.",
    "Pisces": "This brings an increase of emotions and a receptivity to other peoples' feelings. Your emotions predominate over common sense, so it is better to do things which require imagination and inspiration, rather than reason and cool logic. Your body may be more responsive than usual to alcohol, drugs and medicines, so beware of overdoses."
};

// ============================================
// PHASE EXPLANATIONS
// ============================================
const PHASE_EXPLANATIONS = {
    "New Moon": "A time of lull, the completion of old activities and the preparation of new ones. Everything is in decline now - life energy, emotions and physiological activity. For this reason, any projects which require significant effort are not advisable now. This is an inauspicious time for people with low blood pressure and those prone to depression.",
    "Waxing Crescent": "An auspicious time for affairs and businesses which are at an expansive stage of development, as well as for new beginnings. A growth phase: stimulate the growth of plants which bear fruit above the earth now, and cut hair to accelerate its growth.",
    "First Quarter": "A stressful period of time when there is a strong desire to accomplish something, to change, and to show oneself. However, before undertaking anything, first stop and think: is it really needed? Obstacles multiply at this time and contradictions sharpen. Plans developed under this influence often turn out to be unrealistic because people tend to overvalue their abilities.",
    "Waxing Gibbous": "An auspicious time for affairs and businesses which are at an expansive stage of development, as well as for new beginnings. A growth phase: stimulate the growth of plants which bear fruit above the earth now, and cut hair to accelerate its growth.",
    "Full Moon": "A period of excess when everything in nature brims over. Emotions, psychic energy, physiological activity - everything is at its maximum. This is the time of increased creativity, but with those who are prone to high blood pressure, epilepsy or over excitement, this Full Moon period can be problematic.",
    "Waning Gibbous": "The waning Moon is most beneficial for matters at a stage of consolidation, conservation and completion. It hampers growth and helps to remove anything not desirable. Cutting hair now will make it grow more slowly. Plant or replant plants which have fruits under the ground.",
    "Last Quarter": "A stressful and unsettled period. Your ambitions are being stirred up and there is a desire to do something very important and show everyone how cool you are. However, the best way forward is to think thoroughly before doing anything and to direct your energy towards jobs planned earlier, rather than ideas which have just sprung into your head now.",
    "Waning Crescent": "The waning Moon is most beneficial for matters at a stage of consolidation, conservation and completion. It hampers growth and helps to remove anything not desirable. Cutting hair now will make it grow more slowly. Plant or replant plants which have fruits under the ground."
};

// ============================================
// RETROGRADE PLANETS DATA
// ============================================
const RETROGRADE_PLANETS = [
    { planet: "Mercury", emoji: "☿", retroStart: "2024-04-01", retroEnd: "2024-04-25" },
    { planet: "Mercury", emoji: "☿", retroStart: "2024-08-05", retroEnd: "2024-08-28" },
    { planet: "Mercury", emoji: "☿", retroStart: "2024-11-25", retroEnd: "2024-12-15" },
    { planet: "Mercury", emoji: "☿", retroStart: "2025-03-14", retroEnd: "2025-04-07" },
    { planet: "Mercury", emoji: "☿", retroStart: "2025-07-18", retroEnd: "2025-08-11" },
    { planet: "Mercury", emoji: "☿", retroStart: "2025-11-09", retroEnd: "2025-11-29" },
    { planet: "Venus", emoji: "♀", retroStart: "2025-03-01", retroEnd: "2025-04-12" },
    { planet: "Mars", emoji: "♂", retroStart: "2024-12-06", retroEnd: "2025-02-23" },
    { planet: "Jupiter", emoji: "♃", retroStart: "2024-10-09", retroEnd: "2025-02-04" },
    { planet: "Jupiter", emoji: "♃", retroStart: "2025-11-11", retroEnd: "2026-03-10" },
    { planet: "Saturn", emoji: "♄", retroStart: "2024-06-29", retroEnd: "2024-11-15" },
    { planet: "Saturn", emoji: "♄", retroStart: "2025-07-13", retroEnd: "2025-11-27" },
    { planet: "Uranus", emoji: "⛢", retroStart: "2024-09-01", retroEnd: "2025-01-30" },
    { planet: "Uranus", emoji: "⛢", retroStart: "2025-09-06", retroEnd: "2026-02-04" },
    { planet: "Neptune", emoji: "♆", retroStart: "2024-07-02", retroEnd: "2024-12-07" },
    { planet: "Neptune", emoji: "♆", retroStart: "2025-07-04", retroEnd: "2025-12-10" },
    { planet: "Pluto", emoji: "♇", retroStart: "2024-05-02", retroEnd: "2024-10-11" },
    { planet: "Pluto", emoji: "♇", retroStart: "2025-05-04", retroEnd: "2025-10-13" }
];

// ============================================
// CITIES DATA
// ============================================
const CITIES = [
    { name: "New York, USA", lat: 40.7128, lon: -74.0060, timezone: "America/New_York" },
    { name: "Los Angeles, USA", lat: 34.0522, lon: -118.2437, timezone: "America/Los_Angeles" },
    { name: "Chicago, USA", lat: 41.8781, lon: -87.6298, timezone: "America/Chicago" },
    { name: "London, UK", lat: 51.5074, lon: -0.1278, timezone: "Europe/London" },
    { name: "Paris, France", lat: 48.8566, lon: 2.3522, timezone: "Europe/Paris" },
    { name: "Berlin, Germany", lat: 52.5200, lon: 13.4050, timezone: "Europe/Berlin" },
    { name: "Rome, Italy", lat: 41.9028, lon: 12.4964, timezone: "Europe/Rome" },
    { name: "Madrid, Spain", lat: 40.4168, lon: -3.7038, timezone: "Europe/Madrid" },
    { name: "Amsterdam, Netherlands", lat: 52.3676, lon: 4.9041, timezone: "Europe/Amsterdam" },
    { name: "Dubai, UAE", lat: 25.2048, lon: 55.2708, timezone: "Asia/Dubai" },
    { name: "Tokyo, Japan", lat: 35.6762, lon: 139.6503, timezone: "Asia/Tokyo" },
    { name: "Beijing, China", lat: 39.9042, lon: 116.4074, timezone: "Asia/Shanghai" },
    { name: "Shanghai, China", lat: 31.2304, lon: 121.4737, timezone: "Asia/Shanghai" },
    { name: "Hong Kong", lat: 22.3193, lon: 114.1694, timezone: "Asia/Hong_Kong" },
    { name: "Singapore", lat: 1.3521, lon: 103.8198, timezone: "Asia/Singapore" },
    { name: "Sydney, Australia", lat: -33.8688, lon: 151.2093, timezone: "Australia/Sydney" },
    { name: "Melbourne, Australia", lat: -37.8136, lon: 144.9631, timezone: "Australia/Melbourne" },
    { name: "Mumbai, India", lat: 19.0760, lon: 72.8777, timezone: "Asia/Kolkata" },
    { name: "Delhi, India", lat: 28.7041, lon: 77.1025, timezone: "Asia/Kolkata" },
    { name: "Cairo, Egypt", lat: 30.0444, lon: 31.2357, timezone: "Africa/Cairo" },
    { name: "Casablanca, Morocco", lat: 33.5731, lon: -7.5898, timezone: "Africa/Casablanca" },
    { name: "Johannesburg, South Africa", lat: -26.2041, lon: 28.0473, timezone: "Africa/Johannesburg" },
    { name: "Lagos, Nigeria", lat: 6.5244, lon: 3.3792, timezone: "Africa/Lagos" },
    { name: "São Paulo, Brazil", lat: -23.5505, lon: -46.6333, timezone: "America/Sao_Paulo" },
    { name: "Rio de Janeiro, Brazil", lat: -22.9068, lon: -43.1729, timezone: "America/Sao_Paulo" },
    { name: "Mexico City, Mexico", lat: 19.4326, lon: -99.1332, timezone: "America/Mexico_City" },
    { name: "Buenos Aires, Argentina", lat: -34.6037, lon: -58.3816, timezone: "America/Argentina/Buenos_Aires" },
    { name: "Toronto, Canada", lat: 43.6532, lon: -79.3832, timezone: "America/Toronto" },
    { name: "Vancouver, Canada", lat: 49.2827, lon: -123.1207, timezone: "America/Vancouver" },
    { name: "Moscow, Russia", lat: 55.7558, lon: 37.6173, timezone: "Europe/Moscow" },
    { name: "Istanbul, Turkey", lat: 41.0082, lon: 28.9784, timezone: "Europe/Istanbul" },
    { name: "Bangkok, Thailand", lat: 13.7563, lon: 100.5018, timezone: "Asia/Bangkok" },
    { name: "Jakarta, Indonesia", lat: -6.2088, lon: 106.8456, timezone: "Asia/Jakarta" },
    { name: "Manila, Philippines", lat: 14.5995, lon: 120.9842, timezone: "Asia/Manila" },
    { name: "Seoul, South Korea", lat: 37.5665, lon: 126.9780, timezone: "Asia/Seoul" },
    { name: "Riyadh, Saudi Arabia", lat: 24.7136, lon: 46.6753, timezone: "Asia/Riyadh" },
    { name: "Tehran, Iran", lat: 35.6892, lon: 51.3890, timezone: "Asia/Tehran" },
    { name: "Kuala Lumpur, Malaysia", lat: 3.1390, lon: 101.6869, timezone: "Asia/Kuala_Lumpur" },
    { name: "Vienna, Austria", lat: 48.2082, lon: 16.3738, timezone: "Europe/Vienna" },
    { name: "Zurich, Switzerland", lat: 47.3769, lon: 8.5417, timezone: "Europe/Zurich" }
];

// ============================================
// STATE VARIABLES
// ============================================
let LAT = 33.5731;
let LON = -7.5898;
let locationName = "Casablanca, Morocco";
let locationTimezone = "Africa/Casablanca";
let selectedDate = new Date();
let currentMonth = new Date();
let dialogDayDate = null;

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
    let Lp = 218.3164477 + 481267.88123421 * T - 0.0015786 * T * T + T * T * T / 538841;
    let D = 297.8501921 + 445267.1114034 * T - 0.0018819 * T * T + T * T * T / 545868;
    let M = 357.5291092 + 35999.0502909 * T - 0.0001536 * T * T;
    let Mp = 134.9633964 + 477198.8675055 * T + 0.0087414 * T * T + T * T * T / 69699;
    let F = 93.2720950 + 483202.0175233 * T - 0.0036539 * T * T;
    const toRad = deg => deg * Math.PI / 180;
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
    const startSearch = new Date(date);
    startSearch.setDate(startSearch.getDate() - 15);
    let closestTime = null;
    let closestDiff = Infinity;
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
// TIMEZONE-AWARE DATE FUNCTIONS
// ============================================
function getDateInTimezone(date, timezone) {
    try {
        const options = {
            timeZone: timezone,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        };
        const formatter = new Intl.DateTimeFormat('en-CA', options);
        const parts = formatter.formatToParts(date);
        const values = {};
        parts.forEach(part => {
            values[part.type] = part.value;
        });
        return new Date(`${values.year}-${values.month}-${values.day}T${values.hour}:${values.minute}:${values.second}`);
    } catch (e) {
        return date;
    }
}

function getStartOfDayInTimezone(date, timezone) {
    try {
        const options = {
            timeZone: timezone,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        };
        const formatter = new Intl.DateTimeFormat('en-CA', options);
        const dateStr = formatter.format(date);
        const tempDate = new Date(dateStr + 'T00:00:00');
        const targetTime = new Date(date.toLocaleString('en-US', { timeZone: timezone }));
        const localTime = new Date(date.toLocaleString('en-US'));
        const offset = localTime.getTime() - targetTime.getTime();
        return new Date(tempDate.getTime() + offset);
    } catch (e) {
        const result = new Date(date);
        result.setHours(0, 0, 0, 0);
        return result;
    }
}

function getEndOfDayInTimezone(date, timezone) {
    try {
        const startOfDay = getStartOfDayInTimezone(date, timezone);
        return new Date(startOfDay.getTime() + 24 * 60 * 60 * 1000 - 1);
    } catch (e) {
        const result = new Date(date);
        result.setHours(23, 59, 59, 999);
        return result;
    }
}

// ============================================
// ZODIAC SIGN TIMING CALCULATION
// ============================================
function findSignTransitions(date) {
    const startOfDay = getStartOfDayInTimezone(date, locationTimezone);
    const endOfDay = getEndOfDayInTimezone(date, locationTimezone);
    const transitions = [];
    let currentTime = new Date(startOfDay);
    let lastSignIndex = Math.floor(getMoonLongitude(currentTime) / 30);
    transitions.push({
        sign: ZODIAC_SIGNS[lastSignIndex],
        signIndex: lastSignIndex,
        startTime: new Date(startOfDay),
        endTime: null
    });
    const step = 15 * 60 * 1000;
    while (currentTime < endOfDay) {
        currentTime = new Date(currentTime.getTime() + step);
        const moonLong = getMoonLongitude(currentTime);
        const signIndex = Math.floor(moonLong / 30);
        if (signIndex !== lastSignIndex) {
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
// MANSION TIMING CALCULATION
// ============================================
function findMansionTransitions(date) {
    const startOfDay = getStartOfDayInTimezone(date, locationTimezone);
    const endOfDay = getEndOfDayInTimezone(date, locationTimezone);
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
    const step = 15 * 60 * 1000;
    while (currentTime < endOfDay) {
        currentTime = new Date(currentTime.getTime() + step);
        const moonLong = getMoonLongitude(currentTime);
        const mansionIndex = Math.floor(moonLong / mansionSize);
        if (mansionIndex !== lastMansionIndex) {
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
    transitions[transitions.length - 1].endTime = endOfDay;
    return transitions;
}

// ============================================
// VOID OF COURSE CALCULATION (FIXED)
// ============================================
const MAJOR_ASPECTS = [0, 60, 90, 120, 180];
const ASPECT_ORB = 1;

function getPlanetLongitudes(date) {
    const jd = toJulianDay(date);
    const T = (jd - 2451545.0) / 36525;
    const sunLong = getSunLongitude(date);
    const mercuryL = 252.2509 + 149474.0722 * T;
    const mercuryLong = ((mercuryL % 360) + 360) % 360;
    const venusL = 181.9798 + 58519.2130 * T;
    const venusLong = ((venusL % 360) + 360) % 360;
    const marsL = 355.4330 + 19141.6964 * T;
    const marsLong = ((marsL % 360) + 360) % 360;
    const jupiterL = 34.3515 + 3036.3027 * T;
    const jupiterLong = ((jupiterL % 360) + 360) % 360;
    const saturnL = 50.0774 + 1223.5110 * T;
    const saturnLong = ((saturnL % 360) + 360) % 360;
    return {
        Sun: sunLong,
        Mercury: mercuryLong,
        Venus: venusLong,
        Mars: marsLong,
        Jupiter: jupiterLong,
        Saturn: saturnLong
    };
}

function isAspecting(moonLong, planetLong, orb = ASPECT_ORB) {
    for (const aspect of MAJOR_ASPECTS) {
        let diff = Math.abs((moonLong - planetLong + 360) % 360 - aspect);
        if (diff > 180) diff = 360 - diff;
        if (diff <= orb) return true;
        diff = Math.abs((planetLong - moonLong + 360) % 360 - aspect);
        if (diff > 180) diff = 360 - diff;
        if (diff <= orb) return true;
    }
    return false;
}

function findLastAspect(date) {
    let searchDate = new Date(date);
    for (let i = 0; i < 72 * 30; i++) {
        searchDate = new Date(date.getTime() - i * 2 * 60 * 1000);
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
    for (let i = 0; i < 72 * 30; i++) {
        searchDate = new Date(date.getTime() + i * 2 * 60 * 1000);
        const long = getMoonLongitude(searchDate);
        const signIndex = Math.floor(long / 30);
        if (signIndex !== currentSignIndex) {
            let low = searchDate.getTime() - 2 * 60 * 1000;
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

// FIXED: Void of Course - Moon is VOC after its last aspect to ANY planet before changing signs
function getVoidOfCourseForDay(date) {
    const startOfDay = getStartOfDayInTimezone(date, locationTimezone);
    const endOfDay = getEndOfDayInTimezone(date, locationTimezone);
    const vocPeriods = [];
    let currentTime = new Date(startOfDay);
    
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
            const lastAspect = findLastAspect(currentTime);
            const nextSignChange = findNextSignChange(currentTime);
            
            if (lastAspect && nextSignChange) {
                const vocStart = lastAspect.time;
                const vocEnd = nextSignChange;
                
                if (vocStart < endOfDay && vocEnd > startOfDay) {
                    const displayStart = vocStart < startOfDay ? startOfDay : vocStart;
                    const displayEnd = vocEnd > endOfDay ? endOfDay : vocEnd;
                    
                    const exists = vocPeriods.some(p =>
                        Math.abs(p.start.getTime() - displayStart.getTime()) < 15 * 60 * 1000
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
                    
                    if (nextSignChange && nextSignChange > currentTime) {
                        currentTime = new Date(nextSignChange.getTime() + 5 * 60 * 1000);
                    } else {
                        currentTime = new Date(currentTime.getTime() + 5 * 60 * 1000);
                    }
                    continue;
                }
            }
        }
        currentTime = new Date(currentTime.getTime() + 5 * 60 * 1000);
    }
    
    vocPeriods.sort((a, b) => a.start.getTime() - b.start.getTime());
    return vocPeriods;
}

// ============================================
// RETROGRADE PLANETS
// ============================================
function getRetrogradePlanets(date) {
    const checkDate = new Date(date);
    checkDate.setHours(12, 0, 0, 0);
    const retroPlanets = [];
    const seenPlanets = new Set();
    
    for (const p of RETROGRADE_PLANETS) {
        const start = new Date(p.retroStart);
        start.setHours(0, 0, 0, 0);
        const end = new Date(p.retroEnd);
        end.setHours(23, 59, 59, 999);
        
        if (checkDate >= start && checkDate <= end && !seenPlanets.has(p.planet)) {
            retroPlanets.push(p);
            seenPlanets.add(p.planet);
        }
    }
    
    return retroPlanets;
}

function isMercuryRetrograde(date) {
    const checkDate = new Date(date);
    checkDate.setHours(12, 0, 0, 0);
    
    for (const p of RETROGRADE_PLANETS) {
        if (p.planet !== "Mercury") continue;
        const start = new Date(p.retroStart);
        start.setHours(0, 0, 0, 0);
        const end = new Date(p.retroEnd);
        end.setHours(23, 59, 59, 999);
        
        if (checkDate >= start && checkDate <= end) {
            return true;
        }
    }
    return false;
}

function getMoonRiseSet(date) {
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
    try {
        return date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
            timeZone: locationTimezone
        });
    } catch (e) {
        return date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
    }
}

function formatDate(date) {
    try {
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: locationTimezone
        });
    } catch (e) {
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
}

function formatShortDate(date) {
    try {
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            timeZone: locationTimezone
        });
    } catch (e) {
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
        });
    }
}

// Function to update current date and time display
function updateCurrentDateTime() {
    const now = new Date();
    const dateTimeElement = document.getElementById('current-date-time');
    if (!dateTimeElement) return;
    
    try {
        const dateStr = now.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            timeZone: locationTimezone
        });
        
        const timeStr = now.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
            timeZone: locationTimezone
        });
        
        dateTimeElement.textContent = `${dateStr}\u00A0\u00A0 ${timeStr}`;
    } catch (e) {
        // Fallback if timezone fails
        const dateStr = now.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
        
        const timeStr = now.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
        
        dateTimeElement.textContent = `${dateStr}\u00A0\u00A0 ${timeStr}`;
    }
}

// ============================================
// IP-BASED LOCATION
// ============================================
async function getLocationByIP() {
    try {
        const services = [
            'https://ipapi.co/json/',
            'https://ip-api.com/json/',
            'https://ipwho.is/'
        ];
        for (const service of services) {
            try {
                const response = await fetch(service, { timeout: 5000 });
                if (response.ok) {
                    const data = await response.json();
                    let lat, lon, city, country, timezone;
                    if (data.latitude && data.longitude) {
                        lat = data.latitude;
                        lon = data.longitude;
                        city = data.city;
                        country = data.country_name || data.country;
                        timezone = data.timezone;
                    } else if (data.lat && data.lon) {
                        lat = data.lat;
                        lon = data.lon;
                        city = data.city;
                        country = data.country;
                        timezone = data.timezone;
                    }
                    if (lat && lon) {
                        return {
                            lat: lat,
                            lon: lon,
                            name: city && country ? `${city}, ${country}` : 'Your Location',
                            timezone: timezone || Intl.DateTimeFormat().resolvedOptions().timeZone
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
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star pulse';
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
    
    const detectOption = document.createElement('option');
    detectOption.value = 'detect';
    detectOption.textContent = '📍 Detecting your location...';
    locationSelect.appendChild(detectOption);
    
    CITIES.forEach((city, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = city.name;
        locationSelect.appendChild(option);
    });
    
    const ipLocation = await getLocationByIP();
    if (ipLocation) {
        detectOption.textContent = `📍 ${ipLocation.name} (Auto-detected)`;
        detectOption.dataset.lat = ipLocation.lat;
        detectOption.dataset.lon = ipLocation.lon;
        detectOption.dataset.name = ipLocation.name;
        detectOption.dataset.timezone = ipLocation.timezone;
        
        const savedLocation = localStorage.getItem('selectedLocation');
        if (!savedLocation || savedLocation === 'detect') {
            LAT = ipLocation.lat;
            LON = ipLocation.lon;
            locationName = ipLocation.name;
            locationTimezone = ipLocation.timezone;
            locationSelect.value = 'detect';
            updateCurrentDateTime();
            updateDailyView();
            updateMonthlyCalendar();
        } else {
            const savedIndex = parseInt(savedLocation);
            if (savedIndex >= 0 && savedIndex < CITIES.length) {
                locationSelect.value = savedIndex;
                updateLocation(savedIndex);
            }
        }
    } else {
        detectOption.textContent = '📍 Location detection unavailable';
        const savedLocation = localStorage.getItem('selectedLocation');
        if (savedLocation && savedLocation !== 'detect') {
            const savedIndex = parseInt(savedLocation);
            if (savedIndex >= 0 && savedIndex < CITIES.length) {
                locationSelect.value = savedIndex;
                updateLocation(savedIndex);
            }
        } else {
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
                locationTimezone = option.dataset.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone;
                localStorage.setItem('selectedLocation', 'detect');
                updateCurrentDateTime();
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
        locationTimezone = city.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone;
    }
    updateCurrentDateTime();
    updateDailyView();
    updateMonthlyCalendar();
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
    
    // Exact Phase Time
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
    const zodiacInfo = getZodiacSign(moonLong);
    document.getElementById('sign-emoji').textContent = zodiacInfo.sign.emoji;
    document.getElementById('sign-name').textContent = zodiacInfo.sign.name;
    document.getElementById('sign-degree').textContent = zodiacInfo.degree + '°';
    
    // Sign List - Show signs with times (no "All Moon Signs Today" prefix)
    const signTransitions = findSignTransitions(date);
    const signListEl = document.getElementById('sign-list');
    signListEl.innerHTML = '';
    
    signTransitions.forEach(trans => {
        const item = document.createElement('div');
        item.className = 'sign-item';
        item.innerHTML = `
            <span class="sign-item-name">${trans.sign.emoji} ${trans.sign.name}</span>
            <span class="sign-item-time">${formatTime(trans.startTime)} - ${formatTime(trans.endTime)}</span>
        `;
        item.onclick = () => showZodiacDialog(trans.sign.name);
        signListEl.appendChild(item);
    });
    
    // Mansion
    const mansionTransitions = findMansionTransitions(date);
    const currentMansion = mansionTransitions[0].mansion;
    document.getElementById('mansion-number').textContent = currentMansion.number;
    document.getElementById('mansion-name').textContent = currentMansion.name;
    
    // Mansion List - Show mansions with times (no "All Mansions Today" prefix)
    const mansionListEl = document.getElementById('mansion-list');
    mansionListEl.innerHTML = '';
    
    mansionTransitions.forEach(trans => {
        const item = document.createElement('div');
        item.className = 'mansion-item';
        item.innerHTML = `
            <span class="mansion-item-name">${trans.mansion.number}. ${trans.mansion.name}</span>
            <span class="mansion-item-time">${formatTime(trans.startTime)} - ${formatTime(trans.endTime)}</span>
        `;
        item.onclick = () => showMansionDialog(trans.mansion.name);
        mansionListEl.appendChild(item);
    });
    
    // Void of Course
    const vocPeriods = getVoidOfCourseForDay(date);
    const vocDisplay = document.getElementById('voc-display');
    
    if (vocPeriods.length === 0) {
        vocDisplay.innerHTML = `
            <div class="voc-status clear">
                <span class="voc-icon">✓</span>
                <span>Clear</span>
            </div>
            <div class="voc-message">No VOC periods today</div>
        `;
    } else {
        let html = `
            <div class="voc-status active">
                <span class="voc-icon">⚠</span>
                <span>VOC Period${vocPeriods.length > 1 ? 's' : ''}</span>
            </div>
        `;
        vocPeriods.forEach(voc => {
            html += `
                <div class="voc-period">
                    <div class="voc-time">${formatTime(voc.start)} - ${formatTime(voc.end)}</div>
                    <div class="voc-last-aspect">After last aspect to ${voc.lastAspectPlanet}</div>
                </div>
            `;
        });
        vocDisplay.innerHTML = html;
    }
    
    // Retrograde Planets
    const retroPlanets = getRetrogradePlanets(date);
    const retroDisplay = document.getElementById('retrograde-display');
    
    if (retroPlanets.length === 0) {
        retroDisplay.innerHTML = '<div class="retrograde-message">No planets in retrograde</div>';
    } else {
        let html = '<div class="retrograde-list">';
        retroPlanets.forEach(p => {
            html += `<span class="retrograde-planet" onclick="showRetrogradeDialog('${p.planet}')">${p.emoji} ${p.planet} ℞</span>`;
        });
        html += '</div>';
        retroDisplay.innerHTML = html;
    }
    
    // Mercury Status with clickable popup
    const mercuryStatusEl = document.getElementById('mercury-status');
    const mercuryRetro = isMercuryRetrograde(date);
    
    if (mercuryRetro) {
        mercuryStatusEl.innerHTML = `
            <div class="mercury-badge retrograde" onclick="showMercuryDialog(true)">
                ☿ Mercury is Retrograde
            </div>
        `;
    } else {
        mercuryStatusEl.innerHTML = `
            <div class="mercury-badge direct" onclick="showMercuryDialog(false)">
                ☿ Mercury is Direct
            </div>
        `;
    }
}

function navigateDay(delta) {
    selectedDate = new Date(selectedDate.getTime() + delta * 24 * 60 * 60 * 1000);
    updateDailyView();
}

function updateMonthlyCalendar() {
    const monthTitle = document.getElementById('month-title');
    const calendarDays = document.getElementById('calendar-days');
    
    monthTitle.textContent = currentMonth.toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric'
    });
    
    calendarDays.innerHTML = '';
    
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDayOfWeek = firstDay.getDay();
    const today = new Date();
    
    // Empty cells before first day
    for (let i = 0; i < startDayOfWeek; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.className = 'calendar-day empty';
        calendarDays.appendChild(emptyCell);
    }
    
    // Days of the month
    for (let day = 1; day <= lastDay.getDate(); day++) {
        const date = new Date(year, month, day);
        const phaseInfo = getPhaseInfo(date);
        const isToday = date.toDateString() === today.toDateString();
        const isSelected = date.toDateString() === selectedDate.toDateString();
        
        const dayCell = document.createElement('div');
        dayCell.className = `calendar-day${isToday ? ' today' : ''}${isSelected ? ' selected' : ''}`;
        dayCell.innerHTML = `
            <span class="day-number">${day}</span>
            <span class="day-phase">${phaseInfo.emoji}</span>
        `;
        dayCell.onclick = () => openDayDialog(date);
        calendarDays.appendChild(dayCell);
    }
}

// ============================================
// DIALOG FUNCTIONS
// ============================================
function showMansionDialog(mansionName) {
    const mansion = MOON_MANSIONS.find(m => m.name === mansionName);
    if (!mansion) return;
    
    document.getElementById('dialog-mansion-title').textContent = `${mansion.number}. ${mansion.name}`;
    document.getElementById('dialog-mansion-essence').innerHTML = `<p>${mansion.essence}</p>`;
    document.getElementById('dialog-mansion-good').innerHTML = `<p>${mansion.goodFor}</p>`;
    document.getElementById('dialog-mansion-bad').innerHTML = `<p>${mansion.badFor}</p>`;
    
    document.getElementById('mansion-dialog').classList.add('active');
}

function closeMansionDialog() {
    document.getElementById('mansion-dialog').classList.remove('active');
}

function showCurrentMansionDialog() {
    const mansionName = document.getElementById('mansion-name').textContent;
    showMansionDialog(mansionName);
}

function showZodiacDialog(signName) {
    const explanation = ZODIAC_EXPLANATIONS[signName];
    if (!explanation) return;
    
    const sign = ZODIAC_SIGNS.find(s => s.name === signName);
    document.getElementById('dialog-zodiac-title').textContent = `${sign ? sign.emoji : ''} ${signName}`;
    document.getElementById('dialog-zodiac-content').innerHTML = `<p>${explanation}</p>`;
    
    document.getElementById('zodiac-dialog').classList.add('active');
}

function closeZodiacDialog() {
    document.getElementById('zodiac-dialog').classList.remove('active');
}

function showCurrentZodiacDialog() {
    const signName = document.getElementById('sign-name').textContent;
    showZodiacDialog(signName);
}

function showPhaseDialog() {
    const phaseName = document.getElementById('phase-name').textContent;
    const explanation = PHASE_EXPLANATIONS[phaseName];
    if (!explanation) return;
    
    const phaseInfo = getPhaseInfo(selectedDate);
    document.getElementById('dialog-phase-title').textContent = `${phaseInfo.emoji} ${phaseName}`;
    document.getElementById('dialog-phase-content').innerHTML = `<p>${explanation}</p>`;
    
    document.getElementById('phase-dialog').classList.add('active');
}

function closePhaseDialog() {
    document.getElementById('phase-dialog').classList.remove('active');
}

function showVOCExplanation() {
    document.getElementById('voc-dialog').classList.add('active');
}

function closeVOCDialog() {
    document.getElementById('voc-dialog').classList.remove('active');
}

function showMercuryDialog(isRetrograde) {
    const title = isRetrograde ? '☿ Mercury Retrograde' : '☿ Mercury Direct';
    const content = isRetrograde 
        ? `<p>Mercury is retrograde.</p>
           <p>It isn't a good time for decisions and agreements, they might be like a house built on sand. People are prone to mistakes and errors. Do not buy Mercury-related things, like computers or office equipment, as they can have hidden defects.</p>
           <p>On the other hand, this is a good time for finding new, alternative approaches, even if they would normally seem totally crazy to you.</p>`
        : `<p>Mercury is direct.</p>
           <p>So you should not blame it for your mistakes!</p>`;
    
    document.getElementById('dialog-mercury-title').textContent = title;
    document.getElementById('dialog-mercury-content').innerHTML = content;
    document.getElementById('mercury-dialog').classList.add('active');
}

function closeMercuryDialog() {
    document.getElementById('mercury-dialog').classList.remove('active');
}

function showRetrogradeDialog(planetName) {
    const planet = RETROGRADE_PLANETS.find(p => p.planet === planetName);
    if (!planet) return;
    
    let content = '';
    if (planetName === 'Mercury') {
        content = `<p>Mercury is retrograde.</p>
           <p>It isn't a good time for decisions and agreements, they might be like a house built on sand. People are prone to mistakes and errors. Do not buy Mercury-related things, like computers or office equipment, as they can have hidden defects.</p>
           <p>On the other hand, this is a good time for finding new, alternative approaches, even if they would normally seem totally crazy to you.</p>`;
    } else {
        content = `<p>${planetName} is currently in retrograde motion.</p>
           <p>Retrograde planets appear to move backward in the sky from Earth's perspective. This is a time for reflection and review of ${planetName.toLowerCase()}-related matters.</p>`;
    }
    
    document.getElementById('dialog-retrograde-title').textContent = `${planet.emoji} ${planetName} Retrograde`;
    document.getElementById('dialog-retrograde-content').innerHTML = content;
    document.getElementById('retrograde-dialog').classList.add('active');
}

function closeRetrogradeDialog() {
    document.getElementById('retrograde-dialog').classList.remove('active');
}

// Day Dialog for Monthly View - Shows all info with clickable explanations
function openDayDialog(date) {
    dialogDayDate = date;
    const phaseInfo = getPhaseInfo(date);
    const moonLong = getMoonLongitude(date);
    const zodiacInfo = getZodiacSign(moonLong);
    const mansionTransitions = findMansionTransitions(date);
    const signTransitions = findSignTransitions(date);
    const vocPeriods = getVoidOfCourseForDay(date);
    const retroPlanets = getRetrogradePlanets(date);
    
    document.getElementById('day-dialog-title').textContent = formatDate(date);
    
    let html = '';
    
    // Moon Phase
    html += `
        <div class="day-dialog-item" onclick="showDayPhaseDialog()">
            <span class="day-dialog-item-emoji">${phaseInfo.emoji}</span>
            <div class="day-dialog-item-content">
                <div class="day-dialog-item-title">${phaseInfo.name}</div>
                <div class="day-dialog-item-subtitle">${getIllumination(date)}% illuminated - Click for details</div>
            </div>
        </div>
    `;
    
    // Moon Mansions
    mansionTransitions.forEach(trans => {
        html += `
            <div class="day-dialog-item" onclick="showMansionDialog('${trans.mansion.name}')">
                <span class="day-dialog-item-emoji">🌙</span>
                <div class="day-dialog-item-content">
                    <div class="day-dialog-item-title">${trans.mansion.number}. ${trans.mansion.name}</div>
                    <div class="day-dialog-item-subtitle">${formatTime(trans.startTime)} - ${formatTime(trans.endTime)} - Click for details</div>
                </div>
            </div>
        `;
    });
    
    // Moon Signs
    signTransitions.forEach(trans => {
        html += `
            <div class="day-dialog-item" onclick="showZodiacDialog('${trans.sign.name}')">
                <span class="day-dialog-item-emoji">${trans.sign.emoji}</span>
                <div class="day-dialog-item-content">
                    <div class="day-dialog-item-title">Moon in ${trans.sign.name}</div>
                    <div class="day-dialog-item-subtitle">${formatTime(trans.startTime)} - ${formatTime(trans.endTime)} - Click for details</div>
                </div>
            </div>
        `;
    });
    
    // Void of Course
    if (vocPeriods.length > 0) {
        vocPeriods.forEach(voc => {
            html += `
                <div class="day-dialog-item" onclick="showVOCExplanation()">
                    <span class="day-dialog-item-emoji">⚠️</span>
                    <div class="day-dialog-item-content">
                        <div class="day-dialog-item-title">Void of Course</div>
                        <div class="day-dialog-item-subtitle">${formatTime(voc.start)} - ${formatTime(voc.end)} (after ${voc.lastAspectPlanet}) - Click for details</div>
                    </div>
                </div>
            `;
        });
    } else {
        html += `
            <div class="day-dialog-item" onclick="showVOCExplanation()">
                <span class="day-dialog-item-emoji">✓</span>
                <div class="day-dialog-item-content">
                    <div class="day-dialog-item-title">No Void of Course</div>
                    <div class="day-dialog-item-subtitle">Clear day - Click for more info</div>
                </div>
            </div>
        `;
    }
    
    // Retrograde Planets
    if (retroPlanets.length > 0) {
        retroPlanets.forEach(p => {
            html += `
                <div class="day-dialog-item" onclick="showRetrogradeDialog('${p.planet}')">
                    <span class="day-dialog-item-emoji">${p.emoji}</span>
                    <div class="day-dialog-item-content">
                        <div class="day-dialog-item-title">${p.planet} Retrograde</div>
                        <div class="day-dialog-item-subtitle">Click for details</div>
                    </div>
                </div>
            `;
        });
    } else {
        html += `
            <div class="day-dialog-item">
                <span class="day-dialog-item-emoji">✨</span>
                <div class="day-dialog-item-content">
                    <div class="day-dialog-item-title">No Retrograde Planets</div>
                    <div class="day-dialog-item-subtitle">All planets moving direct</div>
                </div>
            </div>
        `;
    }
    
    document.getElementById('day-dialog-content').innerHTML = html;
    document.getElementById('day-dialog').classList.add('active');
}

function closeDayDialog() {
    document.getElementById('day-dialog').classList.remove('active');
}

function viewInDailyMode() {
    if (dialogDayDate) {
        selectedDate = dialogDayDate;
        closeDayDialog();
        document.querySelector('[data-tab="daily"]').click();
        updateDailyView();
    }
}

function showDayPhaseDialog() {
    if (!dialogDayDate) return;
    const phaseInfo = getPhaseInfo(dialogDayDate);
    const explanation = PHASE_EXPLANATIONS[phaseInfo.name];
    if (!explanation) return;
    
    document.getElementById('dialog-phase-title').textContent = `${phaseInfo.emoji} ${phaseInfo.name}`;
    document.getElementById('dialog-phase-content').innerHTML = `<p>${explanation}</p>`;
    document.getElementById('phase-dialog').classList.add('active');
}

// ============================================
// SWIPE HANDLING
// ============================================
function initSwipeHandling() {
    const cards = document.querySelectorAll('.swipeable-card');
    
    cards.forEach(card => {
        let startX = 0;
        let currentX = 0;
        let isDragging = false;
        
        card.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
            card.classList.add('swiping');
        }, { passive: true });
        
        card.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            currentX = e.touches[0].clientX;
            const diff = currentX - startX;
            card.style.transform = `translateX(${diff * 0.3}px)`;
        }, { passive: true });
        
        card.addEventListener('touchend', () => {
            if (!isDragging) return;
            isDragging = false;
            card.classList.remove('swiping');
            
            const diff = currentX - startX;
            
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    card.classList.add('swipe-right');
                    navigateDay(-1);
                } else {
                    card.classList.add('swipe-left');
                    navigateDay(1);
                }
                
                setTimeout(() => {
                    card.classList.remove('swipe-left', 'swipe-right');
                }, 350);
            }
            
            card.style.transform = '';
            startX = 0;
            currentX = 0;
        });
    });
}

// ============================================
// TAB HANDLING
// ============================================
function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.dataset.tab;
            
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
}

// ============================================
// NAVIGATION
// ============================================
function initNavigation() {
    document.getElementById('prev-day').addEventListener('click', () => navigateDay(-1));
    document.getElementById('next-day').addEventListener('click', () => navigateDay(1));
    document.getElementById('return-today').addEventListener('click', () => {
        selectedDate = new Date();
        updateDailyView();
    });
    
    document.getElementById('prev-month').addEventListener('click', () => {
        currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
        updateMonthlyCalendar();
    });
    document.getElementById('next-month').addEventListener('click', () => {
        currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
        updateMonthlyCalendar();
    });
}

// ============================================
// CLOSE DIALOGS ON OVERLAY CLICK
// ============================================
function initDialogOverlays() {
    const overlays = document.querySelectorAll('.dialog-overlay');
    overlays.forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('active');
            }
        });
    });
}


// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    createStarBackground();
    initTabs();
    initNavigation();
    initSwipeHandling();
    initDialogOverlays();
    initLocationSelector();
    updateDailyView();
    updateMonthlyCalendar();
    
    // Update current date/time display immediately and then every second
    updateCurrentDateTime();
    setInterval(updateCurrentDateTime, 1000);
});