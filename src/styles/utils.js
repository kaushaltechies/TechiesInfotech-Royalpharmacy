import { Linking, PixelRatio } from 'react-native';
// import { utcToZonedTime } from 'date-fns-tz';
// import { addDays, format } from 'date-fns';


// Function to scale elements moderately based on screen size and device pixel density
export const moderateScale = (size, factor = 0.5) => {
    const scale = PixelRatio.get(); // Get the device's pixel ratio
    const newSize = size + (scale - 2) * factor; // Adjust the size based on the scale and factor
    return Math.round(newSize);
};

// If you need a factor-based scale that adjusts differently, you can use moderateScaleFactor
// export const moderateScaleFactor = (size, factor = 0.5) => {
//     const scale = PixelRatio.get();
//     return Math.round(size + (scale - 2) * factor);
// };

// export const getUserAttribute = (key, attributes) => {

//     for (let index = 0; index < attributes.length; index++) {
//         const element = attributes[index];
//         if (element.code == key) {
//             return element.value;
//         }

//     }

//     return "";
// };

// export const openLink = (url) => {
//     Linking.openURL(url).catch((err) => console.error("Failed to open URL:", err));
// };


// export const getKSA430Countdown = () => {
//     const now = new Date();

//     // Get UTC time
//     const utc = now.getTime() + now.getTimezoneOffset() * 60000;

//     // KSA is UTC+3
//     const ksaNow = new Date(utc + 3 * 60 * 60 * 1000);

//     // Set target to today at 4:30 PM KSA
//     const target = new Date(ksaNow);
//     target.setHours(16, 30, 0, 0);

//     // If past 4:30 PM, target is tomorrow
//     if (ksaNow > target) {
//         target.setDate(target.getDate() + 1);
//     }

//     const diffMs = target - ksaNow;
//     const hours = Math.floor(diffMs / (1000 * 60 * 60));
//     const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

//     return { hours, minutes, seconds };
// };


// export const getKSAFormattedFutureDate = (days) => {
//     const timeZone = 'Asia/Riyadh';
//     const now = new Date();
//     const ksaNow = utcToZonedTime(now, timeZone);

//     const cutoff = new Date(ksaNow);
//     cutoff.setHours(16, 30, 0, 0); // 4:30 PM

//     const daysToAdd = ksaNow < cutoff ? days : days + 1;
//     const targetDate = addDays(ksaNow, daysToAdd);

//     return format(targetDate, 'yyyy-MM-dd');
// };


// import { format } from 'date-fns';

// export const getKSAFormattedFutureDate = (days) => {
//     const now = new Date();

//     // Convert to KSA time (UTC+3)
//     const utc = now.getTime() + now.getTimezoneOffset() * 60000;
//     const ksaNow = new Date(utc + 3 * 60 * 60 * 1000);

//     // Create cutoff time at 4:30 PM today
//     const cutoff = new Date(ksaNow);
//     cutoff.setHours(16, 30, 0, 0); // 4:30 PM

//     // Add +1 day if current time is past cutoff
//     let daysToAdd = days;
//     if (ksaNow > cutoff) {
//         daysToAdd += 1;
//     }

//     // Add days to get future date
//     const futureDate = new Date(ksaNow);
//     futureDate.setDate(futureDate.getDate() + daysToAdd);

//     // If future date is Friday (getDay() === 5), skip to Saturday
//     if (futureDate.getDay() === 5) {
//         futureDate.setDate(futureDate.getDate() + 1);
//     }

//     // Format both dates for comparison
//     const formattedFuture = format(futureDate, 'yyyy-MM-dd');
//     const formattedToday = format(ksaNow, 'yyyy-MM-dd');

//     if (formattedFuture === formattedToday) {
//         return 'Today';
//     }

//     return format(futureDate, 'E, MMM dd'); // e.g., Sat, Apr 27
// };



// export const successToast = (message) => {
//     Toast.show({
//         type: 'success',
//         text1: message,
//         // text2: `${item.name} has been added to your cart`,
//         position: 'bottom',
//         visibilityTime: 2000,
//         autoHide: true,
//         bottomOffset: 40,
//     });
// }

// export const errorToast = (message) => {
//     Toast.show({
//         type: 'error',
//         text1: message,
//         // text2: `${item.name} has been added to your cart`,
//         position: 'bottom',
//         visibilityTime: 2000,
//         autoHide: true,
//         bottomOffset: 40,
//     });
// }


// export const formatOrderDate = (dateString) =>
//     new Date(dateString.replace(" ", "T")).toLocaleDateString("en-GB", {
//         day: "2-digit",
//         month: "short",
//         year: "numeric",
//     });

