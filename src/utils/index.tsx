export const renderMoney = (amount : number) => {
    return "$" + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const getProgressBarWidth = (width : number) => {
    return (width - 48) * 0.48 - 24;
}