/**  @type {import('tailwindcss').Config} */
 export const content = ["./src/**/*.{js,jsx,ts,tsx}",];
export const theme = {
  extend: {
    screens: {
      'sm':{ min:'0px',max:'600px'},
      'md':{ min:'601px',max:'1030px'},
      'lg':{ min:'1030px',max:'1300px'},
      'xl':{ min:'1301px',max:'1600px'},
  },
      
    },
    
};
export const plugins = [];

