interface Color {
    bg: string;
    text: string;
  }
  
  const Colors: { [key: string]: Color } = {
    red: { bg: "#FF0000", text: "#FFFFFF" },
    green: { bg: "#00FF00", text: "#000000" },
    blue: { bg: "#0000FF", text: "#FFFFFF" },
    yellow: { bg: "#FFFF00", text: "#000000" },
    purple: { bg: "#800080", text: "#FFFFFF" },
    orange: { bg: "#FFA500", text: "#000000" },
    pink: { bg: "#FFC0CB", text: "#000000" },
    brown: { bg: "#A52A2A", text: "#FFFFFF" },
    gray: { bg: "#808080", text: "#FFFFFF" },
    black: { bg: "#000000", text: "#FFFFFF" },
    white: { bg: "#FFFFFF", text: "#000000" },
    cyan: { bg: "#00FFFF", text: "#000000" },
    magenta: { bg: "#FF00FF", text: "#000000" },
    lime: { bg: "#00FF00", text: "#000000" },
    teal: { bg: "#008080", text: "#FFFFFF" },
    navy: { bg: "#000080", text: "#FFFFFF" },
    olive: { bg: "#808000", text: "#FFFFFF" },
    maroon: { bg: "#800000", text: "#FFFFFF" },
  };
  
  export const getRandomColor = (): Color => {
    const keys = Object.keys(Colors);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return Colors[randomKey];
  };
  