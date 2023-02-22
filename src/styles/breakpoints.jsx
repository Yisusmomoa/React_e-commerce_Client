const size = {
    xs: '576px', // for small screen mobile
    sm: '576px', // for mobile screen
    md: '768px', // for tablets
    lg: '992px', // for laptops
    xl: '1220px', // for desktop / monitors
    xxl: '1400px', // for big screens
  }
  
  export const device = {
    xs: `(min-width: ${size.xs})`,
    sm: `(max-width: ${size.sm})`,
    md: `(max-width: ${size.md})`,
    lg: `(max-width: ${size.lg})`,
    xl: `(max-width: ${size.xl})`,
    xxl: `(max-width: ${size.xxl})`,
  }

  export const deviceMin = {
    xs: `(min-width: ${size.xs})`,
    sm: `(min-width: ${size.sm})`,
    md: `(min-width: ${size.md})`,
    lg: `(min-width: ${size.lg})`,
    xl: `(min-width: ${size.xl})`,
    xxl: `(min-width: ${size.xxl})`,
  }
