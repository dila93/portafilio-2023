export const getYearsOfExperience = (date) => {
    const currentDate = new Date();
    return currentDate.getFullYear() - date.getFullYear();
}
