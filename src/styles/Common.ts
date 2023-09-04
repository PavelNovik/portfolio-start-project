import {Theme} from "./Theme";

type FontPropsType = {
    family?: string,
    weight?: number,
    color?: string,
    lineHeight?: number,
    Fmin?: number,
    Fmax?: number,
}
export const font = ({family, weight, color, lineHeight, Fmin, Fmax} : FontPropsType) => `
 font-family: ${family || "Poppins, sans-serif"};
 font-weight: ${weight || 400};
 color: ${color || Theme.colors.titleColor};
 line-height: ${lineHeight || 1.2};
 font-size: calc((100vw - 360px) / (1600 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`