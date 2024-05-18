import { Ref, SVGProps, forwardRef } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg width="97" height="59" viewBox="0 0 97 59" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} >
        <desc>Created with Pixso.</desc>
        <defs>
            <clipPath id="clip2_5657">
                <rect fill="white" fillOpacity="0" height="59" id="logo 1" width="97"/>
            </clipPath>
            <linearGradient id="svg_4">
                <stop offset="0.002625" stopColor="#00c0fd" stopOpacity="0.996094"/>
                <stop offset="1" stopColor="#e70faa" stopOpacity="0.996094"/>
            </linearGradient>
            <linearGradient id="svg_9">
                <stop offset="0" stopColor="#00c0fd" stopOpacity="0.996094"/>
                <stop offset="1" stopColor="#e70faa" stopOpacity="0.996094"/>
            </linearGradient>
        </defs>
        <g className="layer">
            <title>Layer 1</title>
            <rect fill="#FFFFFF" fillOpacity="0" height="59" id="logo 1" width="97" x="0" y="-1"/>
            <g clipPath="url(#clip2_5657)" id="svg_1">
                <text fill="url(#svg_4)" fontFamily="Sans-serif" fontSize="24" fontWeight="bold" id="svg_3"
                      strokeDasharray="null" strokeLinecap={undefined} strokeLinejoin={undefined} strokeWidth="0"
                      textAnchor="middle" x="49.25" y="54.703125">2befree</text>
                <text fill="url(#svg_9)" fontFamily="Sans-serif" fontSize="32" fontWeight="bold" id="svg_10"
                      strokeDasharray="null" strokeLinecap={undefined} strokeLinejoin={undefined} strokeWidth="0"
                      textAnchor="middle" x="49.75" y="27.703125">&#123; brn &#125;</text>
            </g>
        </g>
    </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const HIcon = ForwardRef
