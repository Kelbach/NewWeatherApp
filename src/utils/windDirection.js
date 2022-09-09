function windDirection(x) {
    if (0<x<22.5 || 337.5<x<360) {
        return("N");
    } if (22.5<x<67.5) {
        return("NE");
    } if (67.5<x<112.5) {
        return("E");
    } if (112.5<x<157.5) {
        return("SE");
    } if (157.5<x<202.5) {
        return("S");
    } if (202.5<x<247.5) {
        return("SW");
    } if (247.5<x<292.5) {
        return("W");
    } if (292.5<x<337.5) {
        return("NW");
    }
}

export default windDirection;