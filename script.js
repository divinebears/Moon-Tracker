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
// RETROGRADE EXPLANATIONS
// ============================================
const RETROGRADE_EXPLANATIONS = {
    "Mercury": {
        retrograde: "Mercury is retrograde.\n\nIt isn't a good time for decisions and agreements, they might be like a house built on sand. People are prone to mistakes and errors. Do not buy Mercury-related things, like computers or office equipment, as they can have hidden defects.\n\nOn the other hand, this is a good time for finding new, alternative approaches, even if they would normally seem totally crazy to you.",
        direct: "Mercury is direct.\n\nSo you should not blame it for your mistakes!"
    },
    "Venus": {
        retrograde: "Venus is retrograde.\n\nRelationships and financial matters may be revisited. Old flames may reappear. It's not the best time for starting new relationships, getting married, or making major purchases related to beauty and luxury.\n\nThis is a good time for reflection on what you truly value.",
        direct: "Venus is direct, favoring love, beauty, and financial matters."
    },
    "Mars": {
        retrograde: "Mars is retrograde.\n\nEnergy levels may feel lower than usual. It's not a good time to start new projects requiring assertive action. Conflicts from the past may resurface.\n\nUse this time to reassess your goals and strategies rather than pushing forward aggressively.",
        direct: "Mars is direct, supporting action and initiative."
    },
    "Jupiter": {
        retrograde: "Jupiter is retrograde.\n\nGrowth and expansion slow down. This is a time for inner growth rather than outward expansion. Plans for travel, education, and legal matters may face delays.\n\nUse this period to develop your philosophy and inner wisdom.",
        direct: "Jupiter is direct, supporting growth and expansion."
    },
    "Saturn": {
        retrograde: "Saturn is retrograde.\n\nStructures and responsibilities are being reviewed. Authority figures may seem less reliable. This is a time to reassess your long-term goals and the foundations you've built.\n\nKarmic lessons from the past may resurface for resolution.",
        direct: "Saturn is direct, supporting discipline and structure."
    },
    "Uranus": {
        retrograde: "Uranus is retrograde.\n\nThe desire for change turns inward. You may feel restless but unable to pinpoint why. This is a time for internal revolution rather than external disruption.\n\nReflect on where you need more freedom in your life.",
        direct: "Uranus is direct, supporting innovation and change."
    },
    "Neptune": {
        retrograde: "Neptune is retrograde.\n\nIllusions may be stripped away, revealing uncomfortable truths. Dreams and spiritual pursuits turn inward. Creativity may feel blocked but is actually deepening.\n\nThis is a good time for meditation and spiritual reflection.",
        direct: "Neptune is direct, supporting dreams and intuition."
    },
    "Pluto": {
        retrograde: "Pluto is retrograde.\n\nDeep transformation turns inward. Power dynamics in relationships may shift. Secrets from the past may come to light.\n\nThis is a powerful time for psychological self-examination and releasing old patterns.",
        direct: "Pluto is direct, supporting transformation and empowerment."
    }
};

// ============================================
// RETROGRADE PLANETS DATA - 2024-2026 with accurate dates
// ============================================
const RETROGRADE_PLANETS = [
    { planet: "Mercury", emoji: "☿", retroStart: new Date(2024, 3, 1), retroEnd: new Date(2024, 3, 25) },
    { planet: "Mercury", emoji: "☿", retroStart: new Date(2024, 7, 5), retroEnd: new Date(2024, 7, 28) },
    { planet: "Mercury", emoji: "☿", retroStart: new Date(2024, 10, 25), retroEnd: new Date(2024, 11, 15) },
    { planet: "Mercury", emoji: "☿", retroStart: new Date(2025, 2, 15), retroEnd: new Date(2025, 3, 7) },
    { planet: "Mercury", emoji: "☿", retroStart: new Date(2025, 6, 18), retroEnd: new Date(2025, 7, 11) },
    { planet: "Mercury", emoji: "☿", retroStart: new Date(2025, 10, 9), retroEnd: new Date(2025, 10, 29) },
    { planet: "Mercury", emoji: "☿", retroStart: new Date(2026, 1, 26), retroEnd: new Date(2026, 2, 20) },
    { planet: "Mercury", emoji: "☿", retroStart: new Date(2026, 5, 30), retroEnd: new Date(2026, 6, 23) },
    { planet: "Mercury", emoji: "☿", retroStart: new Date(2026, 9, 24), retroEnd: new Date(2026, 10, 13) },
    { planet: "Venus", emoji: "♀", retroStart: new Date(2025, 2, 2), retroEnd: new Date(2025, 3, 13) },
    { planet: "Mars", emoji: "♂", retroStart: new Date(2024, 11, 6), retroEnd: new Date(2025, 1, 24) },
    { planet: "Jupiter", emoji: "♃", retroStart: new Date(2024, 9, 9), retroEnd: new Date(2025, 1, 4) },
    { planet: "Jupiter", emoji: "♃", retroStart: new Date(2025, 10, 11), retroEnd: new Date(2026, 2, 10) },
    { planet: "Saturn", emoji: "♄", retroStart: new Date(2024, 5, 29), retroEnd: new Date(2024, 10, 15) },
    { planet: "Saturn", emoji: "♄", retroStart: new Date(2025, 6, 13), retroEnd: new Date(2025, 10, 28) },
    { planet: "Uranus", emoji: "⛢", retroStart: new Date(2024, 8, 1), retroEnd: new Date(2025, 0, 30) },
    { planet: "Uranus", emoji: "⛢", retroStart: new Date(2025, 8, 6), retroEnd: new Date(2026, 1, 4) },
    { planet: "Neptune", emoji: "♆", retroStart: new Date(2024, 6, 2), retroEnd: new Date(2024, 11, 7) },
    { planet: "Neptune", emoji: "♆", retroStart: new Date(2025, 6, 4), retroEnd: new Date(2025, 11, 10) },
    { planet: "Pluto", emoji: "♇", retroStart: new Date(2024, 4, 2), retroEnd: new Date(2024, 9, 12) },
    { planet: "Pluto", emoji: "♇", retroStart: new Date(2025, 4, 4), retroEnd: new Date(2025, 9, 14) }
];

// ============================================
// CITIES DATA
// ============================================
const CITIES = [
    { name: "New York, USA", lat: 40.7128, lon: -74.0060, tz: "America/New_York" },
    { name: "Los Angeles, USA", lat: 34.0522, lon: -118.2437, tz: "America/Los_Angeles" },
    { name: "Chicago, USA", lat: 41.8781, lon: -87.6298, tz: "America/Chicago" },
    { name: "London, UK", lat: 51.5074, lon: -0.1278, tz: "Europe/London" },
    { name: "Paris, France", lat: 48.8566, lon: 2.3522, tz: "Europe/Paris" },
    { name: "Berlin, Germany", lat: 52.5200, lon: 13.4050, tz: "Europe/Berlin" },
    { name: "Rome, Italy", lat: 41.9028, lon: 12.4964, tz: "Europe/Rome" },
    { name: "Madrid, Spain", lat: 40.4168, lon: -3.7038, tz: "Europe/Madrid" },
    { name: "Amsterdam, Netherlands", lat: 52.3676, lon: 4.9041, tz: "Europe/Amsterdam" },
    { name: "Brussels, Belgium", lat: 50.8503, lon: 4.3517, tz: "Europe/Brussels" },
    { name: "Vienna, Austria", lat: 48.2082, lon: 16.3738, tz: "Europe/Vienna" },
    { name: "Zurich, Switzerland", lat: 47.3769, lon: 8.5417, tz: "Europe/Zurich" },
    { name: "Stockholm, Sweden", lat: 59.3293, lon: 18.0686, tz: "Europe/Stockholm" },
    { name: "Copenhagen, Denmark", lat: 55.6761, lon: 12.5683, tz: "Europe/Copenhagen" },
    { name: "Oslo, Norway", lat: 59.9139, lon: 10.7522, tz: "Europe/Oslo" },
    { name: "Helsinki, Finland", lat: 60.1699, lon: 24.9384, tz: "Europe/Helsinki" },
    { name: "Moscow, Russia", lat: 55.7558, lon: 37.6173, tz: "Europe/Moscow" },
    { name: "Istanbul, Turkey", lat: 41.0082, lon: 28.9784, tz: "Europe/Istanbul" },
    { name: "Athens, Greece", lat: 37.9838, lon: 23.7275, tz: "Europe/Athens" },
    { name: "Dubai, UAE", lat: 25.2048, lon: 55.2708, tz: "Asia/Dubai" },
    { name: "Mumbai, India", lat: 19.0760, lon: 72.8777, tz: "Asia/Kolkata" },
    { name: "New Delhi, India", lat: 28.6139, lon: 77.2090, tz: "Asia/Kolkata" },
    { name: "Singapore", lat: 1.3521, lon: 103.8198, tz: "Asia/Singapore" },
    { name: "Hong Kong", lat: 22.3193, lon: 114.1694, tz: "Asia/Hong_Kong" },
    { name: "Tokyo, Japan", lat: 35.6762, lon: 139.6503, tz: "Asia/Tokyo" },
    { name: "Seoul, South Korea", lat: 37.5665, lon: 126.9780, tz: "Asia/Seoul" },
    { name: "Beijing, China", lat: 39.9042, lon: 116.4074, tz: "Asia/Shanghai" },
    { name: "Shanghai, China", lat: 31.2304, lon: 121.4737, tz: "Asia/Shanghai" },
    { name: "Sydney, Australia", lat: -33.8688, lon: 151.2093, tz: "Australia/Sydney" },
    { name: "Melbourne, Australia", lat: -37.8136, lon: 144.9631, tz: "Australia/Melbourne" },
    { name: "Auckland, New Zealand", lat: -36.8485, lon: 174.7633, tz: "Pacific/Auckland" },
    { name: "São Paulo, Brazil", lat: -23.5505, lon: -46.6333, tz: "America/Sao_Paulo" },
    { name: "Mexico City, Mexico", lat: 19.4326, lon: -99.1332, tz: "America/Mexico_City" },
    { name: "Buenos Aires, Argentina", lat: -34.6037, lon: -58.3816, tz: "America/Argentina/Buenos_Aires" },
    { name: "Cairo, Egypt", lat: 30.0444, lon: 31.2357, tz: "Africa/Cairo" },
    { name: "Johannesburg, South Africa", lat: -26.2041, lon: 28.0473, tz: "Africa/Johannesburg" },
    { name: "Lagos, Nigeria", lat: 6.5244, lon: 3.3792, tz: "Africa/Lagos" },
    { name: "Toronto, Canada", lat: 43.6532, lon: -79.3832, tz: "America/Toronto" },
    { name: "Vancouver, Canada", lat: 49.2827, lon: -123.1207, tz: "America/Vancouver" },
    { name: "Casablanca, Morocco", lat: 33.5731, lon: -7.5898, tz: "Africa/Casablanca" },
    { name: "Rabat, Morocco", lat: 34.0209, lon: -6.8416, tz: "Africa/Casablanca" },
    { name: "Marrakech, Morocco", lat: 31.6295, lon: -7.9811, tz: "Africa/Casablanca" },
    { name: "Fes, Morocco", lat: 34.0331, lon: -5.0003, tz: "Africa/Casablanca" },
    { name: "Tangier, Morocco", lat: 35.7595, lon: -5.8340, tz: "Africa/Casablanca" },
    { name: "Agadir, Morocco", lat: 30.4278, lon: -9.5981, tz: "Africa/Casablanca" }
];

// ============================================
// STATE
// ============================================
let LAT = 33.5731;
let LON = -7.5898;
let locationName = "Casablanca, Morocco";
let locationTimezone = "Africa/Casablanca";
let selectedDate = new Date();
let currentMonth = new Date();
let dayDialogDate = null;

// ============================================
// TIME FORMATTING
// ============================================
function formatTimeInTZ(date) {
    try {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
            timeZone: locationTimezone
        });
    } catch (e) {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
    }
}

function formatDateInTZ(date) {
    try {
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            timeZone: locationTimezone
        });
    } catch (e) {
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
    }
}

function formatShortDateInTZ(date) {
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

// Fix 3: Format date for card labels (smaller, shorter format)
function formatCardDateLabel(date) {
    try {
        return date.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            timeZone: locationTimezone
        });
    } catch (e) {
        return date.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        });
    }
}

// ============================================
// ASTRONOMICAL CALCULATIONS
// ============================================
const SYNODIC_MONTH = 29.530588853;
const KNOWN_NEW_MOON = new Date(2000, 0, 6, 18, 14, 0);
const MANSION_SIZE = 360 / 28;
const MAJOR_ASPECTS = [0, 60, 90, 120, 180];
const ASPECT_ORB = 8;

function getMoonPhase(date) {
    const diffMs = date.getTime() - KNOWN_NEW_MOON.getTime();
    const diffDays = diffMs / (1000 * 60 * 60 * 24);
    const phase = ((diffDays % SYNODIC_MONTH) + SYNODIC_MONTH) % SYNODIC_MONTH;
    return (phase / SYNODIC_MONTH) * 360;
}

function getPhaseInfo(date) {
    const phase = getMoonPhase(date);
    if (phase < 11.25) return { name: "New Moon", emoji: "🌑" };
    if (phase < 78.75) return { name: "Waxing Crescent", emoji: "🌒" };
    if (phase < 101.25) return { name: "First Quarter", emoji: "🌓" };
    if (phase < 168.75) return { name: "Waxing Gibbous", emoji: "🌔" };
    if (phase < 191.25) return { name: "Full Moon", emoji: "🌕" };
    if (phase < 258.75) return { name: "Waning Gibbous", emoji: "🌖" };
    if (phase < 281.25) return { name: "Last Quarter", emoji: "🌗" };
    if (phase < 348.75) return { name: "Waning Crescent", emoji: "🌘" };
    return { name: "New Moon", emoji: "🌑" };
}

function getIllumination(date) {
    const phase = getMoonPhase(date);
    return Math.round((1 - Math.cos(phase * Math.PI / 180)) / 2 * 100);
}

function findExactPhaseTime(date, targetPhase) {
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);
    
    for (let t = startOfDay.getTime(); t <= endOfDay.getTime(); t += 60 * 60 * 1000) {
        const checkDate = new Date(t);
        const phase = getMoonPhase(checkDate);
        if (Math.abs(phase - targetPhase) < 5 || Math.abs(phase - targetPhase - 360) < 5 || Math.abs(phase - targetPhase + 360) < 5) {
            let low = t - 60 * 60 * 1000;
            let high = t + 60 * 60 * 1000;
            for (let i = 0; i < 20; i++) {
                const mid = Math.floor((low + high) / 2);
                const midPhase = getMoonPhase(new Date(mid));
                let diff = midPhase - targetPhase;
                if (diff > 180) diff -= 360;
                if (diff < -180) diff += 360;
                if (diff < 0) low = mid;
                else high = mid;
            }
            const exactTime = new Date((low + high) / 2);
            if (exactTime >= startOfDay && exactTime <= endOfDay) {
                return exactTime;
            }
        }
    }
    return null;
}

function getMoonLongitude(date) {
    const J2000 = new Date(2000, 0, 1, 12, 0, 0);
    const d = (date.getTime() - J2000.getTime()) / (1000 * 60 * 60 * 24);
    const L = (218.316 + 13.176396 * d) % 360;
    const M = (134.963 + 13.064993 * d) % 360;
    const F = (93.272 + 13.229350 * d) % 360;
    const Mrad = M * Math.PI / 180;
    const Frad = F * Math.PI / 180;
    let longitude = L + 6.289 * Math.sin(Mrad);
    longitude += 1.274 * Math.sin(2 * Frad - Mrad);
    longitude += 0.658 * Math.sin(2 * Frad);
    longitude += 0.214 * Math.sin(2 * Mrad);
    longitude = ((longitude % 360) + 360) % 360;
    return longitude;
}

function getMoonMansion(longitude) {
    const mansionIndex = Math.floor(longitude / MANSION_SIZE);
    return MOON_MANSIONS[mansionIndex];
}

function getZodiacSign(longitude) {
    const signIndex = Math.floor(longitude / 30);
    return ZODIAC_SIGNS[signIndex];
}

function findMansionTransitions(date) {
    const transitions = [];
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);
    
    let currentMansion = getMoonMansion(getMoonLongitude(startOfDay));
    let periodStart = startOfDay;
    
    for (let t = startOfDay.getTime(); t <= endOfDay.getTime(); t += 10 * 60 * 1000) {
        const checkDate = new Date(t);
        const mansion = getMoonMansion(getMoonLongitude(checkDate));
        if (mansion.number !== currentMansion.number) {
            transitions.push({
                mansion: currentMansion,
                startTime: periodStart,
                endTime: new Date(t)
            });
            currentMansion = mansion;
            periodStart = new Date(t);
        }
    }
    transitions.push({
        mansion: currentMansion,
        startTime: periodStart,
        endTime: endOfDay
    });
    return transitions;
}

function findSignTransitions(date) {
    const transitions = [];
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);
    
    let currentSign = getZodiacSign(getMoonLongitude(startOfDay));
    let periodStart = startOfDay;
    
    for (let t = startOfDay.getTime(); t <= endOfDay.getTime(); t += 10 * 60 * 1000) {
        const checkDate = new Date(t);
        const sign = getZodiacSign(getMoonLongitude(checkDate));
        if (sign.name !== currentSign.name) {
            transitions.push({
                sign: currentSign,
                startTime: periodStart,
                endTime: new Date(t)
            });
            currentSign = sign;
            periodStart = new Date(t);
        }
    }
    transitions.push({
        sign: currentSign,
        startTime: periodStart,
        endTime: endOfDay
    });
    return transitions;
}

function getPlanetLongitudes(date) {
    const J2000 = new Date(2000, 0, 1, 12, 0, 0);
    const d = (date.getTime() - J2000.getTime()) / (1000 * 60 * 60 * 24);
    const T = d / 36525;
    
    // Sun
    const sunL = 280.4664567 + 360.0076983 * T + 0.0003032 * T * T;
    const sunM = 357.5291092 + 35999.0502909 * T;
    const sunMrad = sunM * Math.PI / 180;
    const C = (1.9146 - 0.004817 * T) * Math.sin(sunMrad) + 0.019993 * Math.sin(2 * sunMrad);
    const sunLong = ((sunL + C) % 360 + 360) % 360;
    
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
    
    return { sun: sunLong, mercury: mercuryLong, venus: venusLong, mars: marsLong, jupiter: jupiterLong, saturn: saturnLong };
}

function isMoonAspectingPlanet(moonLong, planetLong, orb) {
    orb = orb || ASPECT_ORB;
    for (const aspect of MAJOR_ASPECTS) {
        let diff = Math.abs(((moonLong - planetLong) % 360 + 360) % 360 - aspect);
        if (diff > 180) diff = 360 - diff;
        if (diff <= orb) return true;
        diff = Math.abs(((planetLong - moonLong) % 360 + 360) % 360 - aspect);
        if (diff > 180) diff = 360 - diff;
        if (diff <= orb) return true;
    }
    return false;
}

function findLastMoonAspect(date) {
    let searchDate = new Date(date);
    for (let i = 0; i < 72 * 30; i++) {
        searchDate = new Date(date.getTime() - i * 2 * 60 * 1000);
        const moonLong = getMoonLongitude(searchDate);
        const planets = getPlanetLongitudes(searchDate);
        for (const [name, long] of Object.entries(planets)) {
            if (isMoonAspectingPlanet(moonLong, long, 0.5)) {
                return { time: searchDate, planet: name };
            }
        }
    }
    return null;
}

function findNextMoonSignChange(date) {
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
                if (midSignIndex === currentSignIndex) low = mid;
                else high = mid;
            }
            return new Date(high);
        }
    }
    return null;
}

function getMoonVOCForDay(date) {
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);
    const vocPeriods = [];
    let currentTime = new Date(startOfDay);
    
    while (currentTime < endOfDay) {
        const moonLong = getMoonLongitude(currentTime);
        const planets = getPlanetLongitudes(currentTime);
        let isMoonAspectingAny = false;
        
        for (const [name, long] of Object.entries(planets)) {
            if (isMoonAspectingPlanet(moonLong, long, 1)) {
                isMoonAspectingAny = true;
                break;
            }
        }
        
        if (!isMoonAspectingAny) {
            const lastAspect = findLastMoonAspect(currentTime);
            const nextSignChange = findNextMoonSignChange(currentTime);
            
            if (lastAspect && nextSignChange) {
                let moonHasAspectBeforeSignChange = false;
                let checkTime = new Date(currentTime);
                while (checkTime < nextSignChange) {
                    const cMoonLong = getMoonLongitude(checkTime);
                    const cPlanets = getPlanetLongitudes(checkTime);
                    for (const [name, long] of Object.entries(cPlanets)) {
                        if (isMoonAspectingPlanet(cMoonLong, long, 0.5)) {
                            moonHasAspectBeforeSignChange = true;
                            break;
                        }
                    }
                    if (moonHasAspectBeforeSignChange) break;
                    checkTime = new Date(checkTime.getTime() + 30 * 60 * 1000);
                }
                
                if (!moonHasAspectBeforeSignChange) {
                    const vocStart = lastAspect.time > startOfDay ? lastAspect.time : startOfDay;
                    const vocEnd = nextSignChange < endOfDay ? nextSignChange : endOfDay;
                    
                    const alreadyExists = vocPeriods.some(p => 
                        Math.abs(p.start.getTime() - vocStart.getTime()) < 60 * 60 * 1000
                    );
                    
                    if (!alreadyExists && vocEnd > vocStart) {
                        vocPeriods.push({
                            start: vocStart,
                            end: vocEnd,
                            lastAspectPlanet: lastAspect.planet
                        });
                    }
                    currentTime = new Date(nextSignChange.getTime() + 60 * 60 * 1000);
                    continue;
                }
            }
        }
        currentTime = new Date(currentTime.getTime() + 60 * 60 * 1000);
    }
    return vocPeriods;
}

function isMercuryRetrograde(date) {
    for (const retro of RETROGRADE_PLANETS) {
        if (retro.planet === "Mercury") {
            if (date >= retro.retroStart && date <= retro.retroEnd) {
                return true;
            }
        }
    }
    return false;
}

function getRetrogradePlanets(date) {
    const retro = [];
    for (const r of RETROGRADE_PLANETS) {
        if (date >= r.retroStart && date <= r.retroEnd) {
            retro.push(r);
        }
    }
    return retro;
}

function getMoonRiseSet(date) {
    const baseRise = new Date(date);
    baseRise.setHours(18, 30, 0, 0);
    const baseSet = new Date(date);
    baseSet.setHours(6, 45, 0, 0);
    
    const phase = getMoonPhase(date);
    const phaseOffset = (phase / 360) * 24 * 60;
    
    const rise = new Date(baseRise.getTime() + phaseOffset * 60 * 1000);
    const set = new Date(baseSet.getTime() + phaseOffset * 60 * 1000);
    
    return { rise, set };
}

async function getLocationByIP() {
    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        if (data.latitude && data.longitude) {
            return {
                lat: data.latitude,
                lon: data.longitude,
                name: `${data.city}, ${data.country_name}`,
                timezone: data.timezone
            };
        }
    } catch (e) {
        console.log('Could not detect location by IP');
    }
    return null;
}

// ============================================
// STAR BACKGROUND
// ============================================
function createStarBackground() {
    const container = document.getElementById('star-background');
    if (!container) return;
    
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 2 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.setProperty('--duration', (Math.random() * 3 + 2) + 's');
        star.style.setProperty('--delay', Math.random() * 5 + 's');
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
        detectOption.dataset.tz = ipLocation.timezone;
        
        const savedLocation = localStorage.getItem('selectedLocation');
        if (!savedLocation || savedLocation === 'detect') {
            LAT = ipLocation.lat;
            LON = ipLocation.lon;
            locationName = ipLocation.name;
            locationTimezone = ipLocation.timezone;
            locationSelect.value = 'detect';
            updateCurrentTime();
            updateDailyView();
            updateMonthlyCalendar();
        } else {
            const savedIndex = parseInt(savedLocation);
            if (savedIndex >= 0 && savedIndex < CITIES.length) {
                locationSelect.value = savedIndex;
                updateLocationFromCity(savedIndex);
            }
        }
    } else {
        detectOption.textContent = '📍 Location detection unavailable';
        const savedLocation = localStorage.getItem('selectedLocation');
        if (savedLocation && savedLocation !== 'detect') {
            const savedIndex = parseInt(savedLocation);
            if (savedIndex >= 0 && savedIndex < CITIES.length) {
                locationSelect.value = savedIndex;
                updateLocationFromCity(savedIndex);
            }
        } else {
            const casablancaIndex = CITIES.findIndex(c => c.name.includes('Casablanca'));
            if (casablancaIndex >= 0) {
                locationSelect.value = casablancaIndex;
                updateLocationFromCity(casablancaIndex);
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
                locationTimezone = option.dataset.tz || Intl.DateTimeFormat().resolvedOptions().timeZone;
                localStorage.setItem('selectedLocation', 'detect');
                updateCurrentTime();
                updateDailyView();
                updateMonthlyCalendar();
            }
        } else {
            const index = parseInt(value);
            updateLocationFromCity(index);
            localStorage.setItem('selectedLocation', index);
        }
    });
}

function updateLocationFromCity(cityIndex) {
    const city = CITIES[cityIndex];
    if (city) {
        LAT = city.lat;
        LON = city.lon;
        locationName = city.name;
        locationTimezone = city.tz;
        updateCurrentTime();
        updateDailyView();
        updateMonthlyCalendar();
    }
}

function updateCurrentTime() {
    document.getElementById('current-date').textContent = formatDateInTZ(new Date());
    document.getElementById('current-time').textContent = formatTimeInTZ(new Date());
}

function updateDailyView() {
    const date = selectedDate;
    const now = new Date();
    const isToday = date.toDateString() === now.toDateString();
    
    document.getElementById('selected-date').textContent = formatDateInTZ(date);
    document.getElementById('return-today').style.display = isToday ? 'none' : 'block';
    
    // Fix 3: Update card date labels
    const cardDateLabel = formatCardDateLabel(date);
    document.getElementById('phase-card-date').textContent = cardDateLabel;
    document.getElementById('mansion-card-date').textContent = cardDateLabel;
    document.getElementById('zodiac-card-date').textContent = cardDateLabel;
    document.getElementById('voc-card-date').textContent = cardDateLabel;
    document.getElementById('retro-card-date').textContent = cardDateLabel;
    
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
        document.getElementById('exact-phase-time').textContent = formatTimeInTZ(nearestPhase.time);
    } else {
        exactPhaseBox.style.display = 'none';
    }
    
    // Moon Rise/Set
    const riseSet = getMoonRiseSet(date);
    document.getElementById('moon-rise').textContent = formatTimeInTZ(riseSet.rise);
    document.getElementById('moon-set').textContent = formatTimeInTZ(riseSet.set);
    
    // Zodiac signs
    const signTransitions = findSignTransitions(date);
    const allSignsContainer = document.getElementById('all-signs-container');
    allSignsContainer.innerHTML = '';
    signTransitions.forEach(trans => {
        const startStr = formatTimeInTZ(trans.startTime);
        const endStr = formatTimeInTZ(trans.endTime);
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
    
    // Moon Mansions
    const mansionTransitions = findMansionTransitions(date);
    const allMansionsContainer = document.getElementById('all-mansions-container');
    allMansionsContainer.innerHTML = '';
    mansionTransitions.forEach(trans => {
        const startStr = formatTimeInTZ(trans.startTime);
        const endStr = formatTimeInTZ(trans.endTime);
        const mansionItem = document.createElement('div');
        mansionItem.className = 'mansion-item';
        mansionItem.innerHTML = `
            <span class="mansion-item-name"><span class="mansion-number-badge">${trans.mansion.number}</span>${trans.mansion.name}</span>
            <span class="mansion-item-time">${startStr} - ${endStr}</span>
        `;
        mansionItem.querySelector('.mansion-item-name').addEventListener('click', () => {
            showMansionDialog(trans.mansion);
        });
        allMansionsContainer.appendChild(mansionItem);
    });
    
    // VOC
    const vocPeriods = getMoonVOCForDay(date);
    const vocCard = document.getElementById('voc-card');
    const vocStatus = document.getElementById('voc-status');
    const vocTiming = document.getElementById('voc-timing');
    const vocTimes = document.getElementById('voc-times');
    
    if (vocPeriods.length > 0) {
        vocCard.classList.add('voc-active');
        vocStatus.textContent = '⚠ VOC Active';
        vocStatus.className = 'voc-status active';
        vocTiming.style.display = 'block';
        vocTimes.innerHTML = vocPeriods.map(p => `
            <div class="voc-period-item">
                ${formatTimeInTZ(p.start)} - ${formatTimeInTZ(p.end)}
                <br><small>Last aspect: ${p.lastAspectPlanet}</small>
            </div>
        `).join('');
    } else {
        vocCard.classList.remove('voc-active');
        vocStatus.textContent = '✓ Clear';
        vocStatus.className = 'voc-status inactive';
        vocTiming.style.display = 'none';
        vocTimes.innerHTML = '';
    }
    
    // Retrograde planets
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
                    <div class="retro-dates">${formatShortDateInTZ(p.retroStart)} - ${formatShortDateInTZ(p.retroEnd)}</div>
                </div>
            </div>
        `).join('');
        retroContainer.querySelectorAll('.retro-planet').forEach(el => {
            el.addEventListener('click', () => {
                showRetroDialog(el.dataset.planet, true);
            });
        });
    }
    
    const mercuryRetro = isMercuryRetrograde(date);
    if (!mercuryRetro) {
        mercuryStatus.style.display = 'block';
        mercuryStatus.textContent = '☿ Mercury is Direct ✓';
        mercuryStatus.onclick = () => showRetroDialog('Mercury', false);
    } else {
        mercuryStatus.style.display = 'none';
    }
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
    
    for (let i = 0; i < startOffset; i++) {
        const cell = document.createElement('div');
        cell.className = 'calendar-day empty';
        container.appendChild(cell);
    }
    
    for (let day = 1; day <= lastDay.getDate(); day++) {
        const date = new Date(year, month, day, 12, 0, 0);
        const phaseInfo = getPhaseInfo(date);
        const signTransitions = findSignTransitions(date);
        const mansionTransitions = findMansionTransitions(date);
        const signEmojis = signTransitions.map(t => t.sign.emoji).join(' ');
        
        const cell = document.createElement('div');
        cell.className = 'calendar-day';
        const today = new Date();
        if (date.toDateString() === today.toDateString()) cell.classList.add('today');
        if (date.toDateString() === selectedDate.toDateString()) cell.classList.add('selected');
        
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
    updateDayDialogContent();
    document.getElementById('day-dialog').style.display = 'flex';
}

// Fix 2: Updated day dialog with moon phase timing
function updateDayDialogContent() {
    const date = dayDialogDate;
    const phaseInfo = getPhaseInfo(date);
    const mansionTransitions = findMansionTransitions(date);
    const signTransitions = findSignTransitions(date);
    const vocPeriods = getMoonVOCForDay(date);
    const retroPlanets = getRetrogradePlanets(date);
    
    document.getElementById('day-dialog-title').textContent = formatDateInTZ(date);
    
    const itemsContainer = document.getElementById('day-dialog-items');
    itemsContainer.innerHTML = '';
    
    // Moon Phase with timing (Fix 2)
    const phaseTargets = [0, 90, 180, 270];
    const phaseNames = ['New Moon', 'First Quarter', 'Full Moon', 'Last Quarter'];
    let exactPhaseInfo = null;
    phaseTargets.forEach((target, idx) => {
        const exactTime = findExactPhaseTime(date, target);
        if (exactTime) {
            exactPhaseInfo = { name: phaseNames[idx], time: exactTime };
        }
    });
    
    let phaseText = `${phaseInfo.name} - ${getIllumination(date)}% illuminated`;
    if (exactPhaseInfo) {
        phaseText += ` (${exactPhaseInfo.name} at ${formatTimeInTZ(exactPhaseInfo.time)})`;
    }
    
    const phaseItem = createDayDialogItem(
        phaseInfo.emoji,
        phaseText,
        () => showPhaseDialog(phaseInfo.name)
    );
    itemsContainer.appendChild(phaseItem);
    
    // Moon Mansions
    mansionTransitions.forEach(trans => {
        const mansionItem = createDayDialogItem(
            '🏛️',
            `${trans.mansion.number}. ${trans.mansion.name} (${formatTimeInTZ(trans.startTime)} - ${formatTimeInTZ(trans.endTime)})`,
            () => showMansionDialog(trans.mansion)
        );
        itemsContainer.appendChild(mansionItem);
    });
    
    // Moon Signs
    signTransitions.forEach(trans => {
        const signItem = createDayDialogItem(
            trans.sign.emoji,
            `Moon in ${trans.sign.name} (${formatTimeInTZ(trans.startTime)} - ${formatTimeInTZ(trans.endTime)})`,
            () => showZodiacDialog(trans.sign.name)
        );
        itemsContainer.appendChild(signItem);
    });
    
    // Moon Void of Course - Only show if there are VOC periods
    if (vocPeriods.length > 0) {
        vocPeriods.forEach(p => {
            const vocItem = createDayDialogItem(
                '⚠️',
                `Moon VOC: ${formatTimeInTZ(p.start)} - ${formatTimeInTZ(p.end)}`,
                () => showVOCDialog()
            );
            itemsContainer.appendChild(vocItem);
        });
    }
    
    // Retrograde planets
    if (retroPlanets.length > 0) {
        retroPlanets.forEach(p => {
            const retroItem = createDayDialogItem(
                p.emoji,
                `${p.planet} Retrograde`,
                () => showRetroDialog(p.planet, true)
            );
            itemsContainer.appendChild(retroItem);
        });
    } else {
        const retroItem = createDayDialogItem(
            '℞',
            'No planets in retrograde',
            null
        );
        itemsContainer.appendChild(retroItem);
    }
}

function createDayDialogItem(icon, text, onClick) {
    const item = document.createElement('div');
    item.className = 'day-dialog-item';
    if (onClick) item.style.cursor = 'pointer';
    item.innerHTML = `
        <span class="item-icon">${icon}</span>
        <span class="item-text">${text}</span>
        ${onClick ? '<span class="item-arrow">›</span>' : ''}
    `;
    if (onClick) item.addEventListener('click', onClick);
    return item;
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

function showRetroDialog(planet, isRetrograde) {
    const info = RETROGRADE_EXPLANATIONS[planet];
    if (!info) return;
    document.getElementById('retro-dialog-title').textContent = isRetrograde ? `${planet} Retrograde` : `${planet} Direct`;
    document.getElementById('retro-dialog-text').textContent = isRetrograde ? info.retrograde : info.direct;
    document.getElementById('retro-dialog').style.display = 'flex';
}

// ============================================
// SMOOTH SWIPE NAVIGATION
// ============================================
function initSwipeNavigation() {
    document.querySelectorAll('.swipeable-card').forEach(card => {
        const prevBtn = card.querySelector('.swipe-btn.prev');
        const nextBtn = card.querySelector('.swipe-btn.next');
        
        function navigateDay(direction) {
            // Lock card height during transition to prevent size change
            const currentHeight = card.offsetHeight;
            const currentWidth = card.offsetWidth;
            card.style.minHeight = currentHeight + 'px';
            card.style.maxHeight = currentHeight + 'px';
            card.style.width = currentWidth + 'px';
            
            card.classList.remove('swipe-enter-left', 'swipe-enter-right', 'swiping-left', 'swiping-right');
            void card.offsetWidth;
            
            if (direction === 'next') {
                card.classList.add('swiping-left');
            } else {
                card.classList.add('swiping-right');
            }
            
            setTimeout(() => {
                selectedDate = new Date(selectedDate.getTime() + (direction === 'next' ? 1 : -1) * 24 * 60 * 60 * 1000);
                updateDailyView();
                
                card.classList.remove('swiping-left', 'swiping-right');
                void card.offsetWidth;
                card.classList.add(direction === 'next' ? 'swipe-enter-left' : 'swipe-enter-right');
                
                setTimeout(() => {
                    card.classList.remove('swipe-enter-left', 'swipe-enter-right');
                    // Release height/width lock after animation
                    card.style.minHeight = '';
                    card.style.maxHeight = '';
                    card.style.width = '';
                }, 350);
            }, 200);
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                navigateDay('prev');
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                navigateDay('next');
            });
        }
        
        // Touch swipe - prevent page scroll during horizontal swipe
        let touchStartX = 0;
        let touchStartY = 0;
        let isSwiping = false;
        let swipeHandled = false;
        
        card.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].clientX;
            touchStartY = e.changedTouches[0].clientY;
            isSwiping = false;
            swipeHandled = false;
        }, { passive: true });
        
        card.addEventListener('touchmove', (e) => {
            if (swipeHandled) {
                e.preventDefault();
                return;
            }
            const dx = e.changedTouches[0].clientX - touchStartX;
            const dy = e.changedTouches[0].clientY - touchStartY;
            
            // If horizontal movement is dominant, prevent vertical scroll
            if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 10) {
                isSwiping = true;
                e.preventDefault();
            }
        }, { passive: false });
        
        card.addEventListener('touchend', (e) => {
            if (swipeHandled) return;
            const dx = e.changedTouches[0].clientX - touchStartX;
            
            if (isSwiping && Math.abs(dx) > 50) {
                swipeHandled = true;
                if (dx < 0) {
                    navigateDay('next');
                } else {
                    navigateDay('prev');
                }
            }
        }, { passive: true });
    });
}

// Day dialog swipe navigation
function initDayDialogSwipe() {
    const dayDialog = document.querySelector('.day-dialog-swipeable');
    if (!dayDialog) return;
    
    let touchStartX = 0;
    let touchStartY = 0;
    let isSwiping = false;
    
    dayDialog.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].clientX;
        touchStartY = e.changedTouches[0].clientY;
        isSwiping = false;
    }, { passive: true });
    
    dayDialog.addEventListener('touchmove', (e) => {
        const dx = e.changedTouches[0].clientX - touchStartX;
        const dy = e.changedTouches[0].clientY - touchStartY;
        
        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 10) {
            isSwiping = true;
            e.preventDefault();
        }
    }, { passive: false });
    
    dayDialog.addEventListener('touchend', (e) => {
        const dx = e.changedTouches[0].clientX - touchStartX;
        
        if (isSwiping && Math.abs(dx) > 50) {
            if (dx < 0) {
                navigateDayDialogNext();
            } else {
                navigateDayDialogPrev();
            }
        }
    }, { passive: true });
}

function navigateDayDialogPrev() {
    if (dayDialogDate) {
        dayDialogDate = new Date(dayDialogDate.getTime() - 24 * 60 * 60 * 1000);
        updateDayDialogContent();
    }
}

function navigateDayDialogNext() {
    if (dayDialogDate) {
        dayDialogDate = new Date(dayDialogDate.getTime() + 24 * 60 * 60 * 1000);
        updateDayDialogContent();
    }
}

// ============================================
// DAY NAVIGATION
// ============================================
function navigateToPrevDay() {
    selectedDate = new Date(selectedDate.getTime() - 24 * 60 * 60 * 1000);
    updateDailyView();
}

function navigateToNextDay() {
    selectedDate = new Date(selectedDate.getTime() + 24 * 60 * 60 * 1000);
    updateDailyView();
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
    initDayDialogSwipe();
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
    
    // Prev/Next Day buttons next to date
    document.getElementById('prev-day').addEventListener('click', navigateToPrevDay);
    document.getElementById('next-day').addEventListener('click', navigateToNextDay);
    
    // Return to today
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
    
    // Day dialog navigation buttons
    document.getElementById('day-dialog-prev').addEventListener('click', navigateDayDialogPrev);
    document.getElementById('day-dialog-next').addEventListener('click', navigateDayDialogNext);
    
    // Close dialogs
    const dialogClosers = [
        { close: 'close-mansion-dialog', overlay: 'mansion-dialog' },
        { close: 'close-day-dialog', overlay: 'day-dialog' },
        { close: 'close-voc-dialog', overlay: 'voc-dialog' },
        { close: 'close-phase-dialog', overlay: 'phase-dialog' },
        { close: 'close-zodiac-dialog', overlay: 'zodiac-dialog' },
        { close: 'close-mercury-dialog', overlay: 'mercury-dialog' },
        { close: 'close-retro-dialog', overlay: 'retro-dialog' }
    ];
    
    dialogClosers.forEach(({ close, overlay }) => {
        const closeBtn = document.getElementById(close);
        const overlayEl = document.getElementById(overlay);
        if (closeBtn) closeBtn.addEventListener('click', () => overlayEl.style.display = 'none');
        if (overlayEl) overlayEl.addEventListener('click', (e) => {
            if (e.target === overlayEl) overlayEl.style.display = 'none';
        });
    });
    
    // Phase click
    document.getElementById('phase-name').addEventListener('click', () => {
        const phaseInfo = getPhaseInfo(selectedDate);
        showPhaseDialog(phaseInfo.name);
    });
    
    // VOC click
    document.getElementById('voc-label').addEventListener('click', showVOCDialog);
    
    // Expand to daily view
    document.getElementById('expand-to-daily').addEventListener('click', () => {
        if (dayDialogDate) {
            selectedDate = new Date(dayDialogDate);
            document.getElementById('day-dialog').style.display = 'none';
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            document.querySelector('.tab-btn[data-tab="daily"]').classList.add('active');
            document.getElementById('daily-view').classList.add('active');
            updateDailyView();
        }
    });
});
