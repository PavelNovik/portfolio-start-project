import { Ref, SVGProps, forwardRef } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg width="97" height="59" viewBox="0 0 97 59" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} >
        <desc>Created with Pixso.</desc>
        <defs>
            <clipPath id="clip2_5657">
                <rect fill="white" fillOpacity="0" height="59" id="logo 1" width="97"/>
            </clipPath>

        </defs>
        <g className="layer">
            <title>Layer 1</title>
            <rect fill="#FFFFFF" fillOpacity="0" height="59" id="logo 1" width="97" x="0" y="-1"/>
            <g clipPath="url(#clip2_5657)" id="svg_1">
                <text fill="#43494f" fontFamily="Sans-serif" fontSize="24" fontWeight="bold" id="svg_3"
                      strokeDasharray="null" strokeLinecap={undefined} strokeLinejoin={undefined} strokeWidth="0"
                      textAnchor="middle" x="49.25" y="54.703125">2befree</text>
                <text fill="#43494f" fontFamily="Sans-serif" fontSize="32" fontWeight="bold" id="svg_10"
                      strokeDasharray="null" strokeLinecap={undefined} strokeLinejoin={undefined} strokeWidth="0"
                      textAnchor="middle" x="49.75" y="27.703125">&#123; brn &#125;</text>
            </g>
        </g>
    </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const FIcon = ForwardRef
