//[ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]
covid_data = [
    [1, 'Ernakulam', 34000, 2000, 23000, 20000, 2000],
    [2, 'Idukki', 14000, 3000, 25000, 30000, 1000],
    [3, 'Thrissur', 24000, 4000, 33000, 24000, 2500],
    [4, 'Pathanamthitta', 20000, 2000, 45000, 22000, 1500],
    [5, 'Kozhikode', 44000, 5000, 12000, 21000, 500],
    [6, 'Palakkad', 12000, 1000, 20000, 23000, 3400],
    [7, 'Kottayam', 27000, 1500, 27000, 14000, 1000],
    [8, 'Kollam', 14000, 2500, 25000, 18000, 2700]
];

// 1. district having Highest +ve case
console.log("1. District with Highest +ve case:");
 highestPositiveCaseDistrict = covid_data.reduce((max, district) => district[2] > max[2] ? district : max, );
console.log(highestPositiveCaseDistrict[1]);

// 2. district having Highest 1st dose vaccine
console.log("\n2. District with Highest 1st dose vaccine:");
 highestFirstDoseDistrict = covid_data.reduce((max, district) => district[5] > max[5] ? district : max, );
console.log(highestFirstDoseDistrict[1]);

// 3. district having lowest death rate
console.log("\n3. District with lowest death rate:");
 lowestDeathRateDistrict = covid_data.reduce((min, district) => district[3] < min[3] ? district : min, );
console.log(lowestDeathRateDistrict[1]);

// 4. sort data with +ve case in descending order
console.log("\n4. Data sorted by +ve case (descending):");
 sortedPositiveCases = covid_data.sort((a, b) => b[2] - a[2]);
sortedPositiveCases.forEach(district => console.log(district[1], "- +ve cases:", district[2]));

// 5. is district with +ve cases > 15000
console.log("\n5. Is district with +ve cases > 15000:");
 positiveCasesAbove15000 = covid_data.some(district => district[2] > 15000 );
console.log(positiveCasesAbove15000 ? "Yes" : "No" );

// 6. sort data with 1st dose vaccine ascending order
console.log("\n6. Data sorted by 1st dose vaccine (ascending):");
 sortedFirstDose = covid_data.sort((a, b) => a[5] - b[5]);
sortedFirstDose.forEach(district => console.log(district[1], "- 1st dose:", district[5]));

// 7. Print Thrissur details
console.log("\n7. Thrissur details:");
 thrissurDetails = covid_data.find(district => district[1] == 'Thrissur');
 console.log(thrissurDetails);
// if (thrissurDetails) {
//     console.log(thrissurDetails);
// } else {
//     console.log("Thrissur not found");
// }

// 8. Print total number of positive cases
console.log("\n8. Total number of positive cases:");
total=covid_data.map((pos)=>pos[2]).reduce((n1,n2)=>n1+n2)
console.log(total);
//  totalPositiveCases = covid_data.reduce((sum, district) => sum + district[2], 0);
// console.log(totalPositiveCases);

// 9. Print total number of curred cases
console.log("\n9. Total number of cured cases:");
totalCured=covid_data.map((pos)=>pos[4]).reduce((n1,n2)=>n1+n2)
console.log(totalCured);

//  totalCuredCases = covid_data.reduce((sum, district) => sum + district[4], 0);
// console.log(totalCuredCases);

// 10. Print cured cases in Idukki
console.log("\n10. Cured cases in Idukki:");
 idukkiDetails = covid_data.find(district => district[1] == 'Idukki');
 console.log(idukkiDetails[4]);
