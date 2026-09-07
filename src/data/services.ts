import {
  Users,
  TrendingUp,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { createElement, type ComponentType, type SVGProps } from "react";
import { HealthInsuranceIcon } from "@/components/icons/HealthInsuranceIcon";

const MedicareIcon: ComponentType<SVGProps<SVGSVGElement>> = (props) =>
  createElement(
    "svg",
    {
      width: "30",
      height: "27",
      viewBox: "0 0 30 27",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
    },
    createElement("g", {
      dangerouslySetInnerHTML: { __html: '\n<path d="M16.8596 0.851992C18.1115 0.283328 19.6754 -0.145195 21.3293 0.0463279C25.2515 0.50076 29.6129 3.65132 29.2209 9.44477C29.1602 10.3418 28.7938 11.298 28.2902 12.2358C27.7791 13.1875 27.085 14.1969 26.2873 15.2162C25.947 15.6511 25.3179 15.7275 24.883 15.3871C24.4482 15.0468 24.3718 14.4177 24.7121 13.9829C25.4682 13.0166 26.089 12.1061 26.5276 11.2895C26.9735 10.4589 27.1918 9.79614 27.2248 9.31C27.5263 4.85359 24.2551 2.39936 21.0998 2.03363C19.923 1.89728 18.7337 2.19768 17.6867 2.67328C16.6411 3.14828 15.8058 3.76713 15.3684 4.1684L15.0813 4.43207H14.2336L13.9465 4.1684C13.5146 3.77213 12.6638 3.15227 11.5979 2.67523C10.5308 2.19776 9.32341 1.89721 8.14572 2.03363C4.99034 2.39922 1.71826 4.85343 2.01974 9.31C2.07037 10.0565 2.54699 11.1532 3.47287 12.5317C4.37456 13.8741 5.61331 15.3551 7.00119 16.8442C9.51923 19.5458 12.4675 22.2041 14.6233 24.0024C15.3951 23.3585 16.2707 22.6028 17.1926 21.7729C17.6029 21.4037 18.2352 21.437 18.6047 21.8471C18.9742 22.2575 18.9407 22.8897 18.5305 23.2592C17.3231 24.3462 16.1909 25.3114 15.2541 26.0746L14.6223 26.5893L13.9914 26.0746C11.7574 24.2546 8.39036 21.2684 5.53829 18.2084C4.11331 16.6796 2.79667 15.1108 1.81271 13.6459C0.85324 12.2174 0.112853 10.7481 0.0246229 9.44477C-0.367342 3.65137 3.99312 0.500835 7.91525 0.0463279C9.56836 -0.145186 11.1487 0.283259 12.4152 0.850039C13.3015 1.24668 14.0711 1.72908 14.6545 2.16645C15.229 1.73108 15.9851 1.24926 16.8596 0.851992ZM24.2619 15.9702H28.9817V20.9379H24.2619V25.6577H19.2951V20.9379H14.5754V15.9702H19.2951V11.2514H24.2619V15.9702ZM21.2951 17.9702H16.5754V18.9379H21.2951V23.6577H22.2619V18.9379H26.9817V17.9702H22.2619V13.2514H21.2951V17.9702Z" fill="#9B77F0"/>\n' }
    })
  );

const LifeInsuranceIcon: ComponentType<SVGProps<SVGSVGElement>> = (props) =>
  createElement(
    "svg",
    {
      width: "27",
      height: "26",
      viewBox: "0 0 27 26",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
    },
    createElement("g", {
      dangerouslySetInnerHTML: { __html: '\n<path d="M3.75797 22.5915C3.92501 22.7036 8.82507 25.4485 12.2217 25.4485C16.175 25.4485 17.8455 24.3281 17.9569 24.3282L25.474 19.6226C25.9194 19.3985 26.2535 18.9504 26.3649 18.4462C26.4763 17.942 26.4206 17.3819 26.1422 16.9337C25.6411 15.9814 24.416 15.7013 23.5251 16.2055L17.1217 19.3425C16.0638 19.8467 14.9501 19.8467 12.7785 19.8467C10.6069 19.8467 7.32166 19.2865 7.266 19.2865C7.09895 19.2305 6.93191 19.3425 6.93191 19.5106C6.87618 19.6787 6.98757 19.8467 7.15461 19.8467C7.32166 19.8467 10.5513 20.4069 12.7785 20.4069C15.0614 20.4069 16.1751 20.4069 17.3444 19.7906L23.7478 16.6536C24.0819 16.4855 24.4717 16.4295 24.8058 16.5415C25.1399 16.6536 25.4183 16.8776 25.641 17.2137C25.8637 17.5499 25.9194 17.942 25.808 18.2781C25.6967 18.6142 25.474 18.9503 25.1399 19.1184L17.6228 23.8239C17.6228 23.8239 15.9523 24.8883 12.2217 24.8883C8.99212 24.8883 4.0364 22.1994 3.98074 22.1434C3.92501 22.0873 2.81142 21.5271 0.528432 21.5271C0.361386 21.5271 0.25 21.6392 0.25 21.8073C0.25 21.9753 0.361386 22.0874 0.528432 22.0874C2.6443 22.0874 3.75797 22.5915 3.75797 22.5915Z" fill="#9B77F0"/>\n<path d="M15.8967 18.1101C15.9523 18.1661 16.0637 18.1661 16.1194 18.1661C16.175 18.1661 16.2864 18.1661 16.3421 18.054C16.4535 17.942 16.4535 17.774 16.3421 17.6619C16.2864 17.6619 15.6739 17.0457 14.4489 17.0457H11.108C10.3841 17.0457 9.27049 16.2054 8.21255 15.4211C7.04323 14.5248 5.92963 13.6846 4.98302 13.6846H0.528432C0.361386 13.6846 0.25 13.7966 0.25 13.9647C0.25 14.1327 0.361386 14.2448 0.528432 14.2448H4.98302C5.70686 14.2448 6.82052 15.0851 7.87846 15.8694C9.04778 16.7656 10.1614 17.6059 11.108 17.6059H14.4489C15.3955 17.6059 15.8967 18.1101 15.8967 18.1101Z" fill="#9B77F0"/>\n<path d="M3.75797 22.5915C3.92501 22.7036 8.82507 25.4485 12.2217 25.4485C16.175 25.4485 17.8455 24.3281 17.9569 24.3282L25.474 19.6226C25.9194 19.3985 26.2535 18.9504 26.3649 18.4462C26.4763 17.942 26.4206 17.3819 26.1422 16.9337C25.6411 15.9814 24.416 15.7013 23.5251 16.2055L17.1217 19.3425C16.0638 19.8467 14.9501 19.8467 12.7785 19.8467C10.6069 19.8467 7.32166 19.2865 7.266 19.2865C7.09895 19.2305 6.93191 19.3425 6.93191 19.5106C6.87618 19.6787 6.98757 19.8467 7.15461 19.8467C7.32166 19.8467 10.5513 20.4069 12.7785 20.4069C15.0614 20.4069 16.1751 20.4069 17.3444 19.7906L23.7478 16.6536C24.0819 16.4855 24.4717 16.4295 24.8058 16.5415C25.1399 16.6536 25.4183 16.8776 25.641 17.2137C25.8637 17.5499 25.9194 17.942 25.808 18.2781C25.6967 18.6142 25.474 18.9503 25.1399 19.1184L17.6228 23.8239C17.6228 23.8239 15.9523 24.8883 12.2217 24.8883C8.99212 24.8883 4.0364 22.1994 3.98074 22.1434C3.92501 22.0873 2.81142 21.5271 0.528432 21.5271C0.361386 21.5271 0.25 21.6392 0.25 21.8073C0.25 21.9753 0.361386 22.0874 0.528432 22.0874C2.6443 22.0874 3.75797 22.5915 3.75797 22.5915Z" stroke="#9B77F0" stroke-width="0.5"/>\n<path d="M15.8967 18.1101C15.9523 18.1661 16.0637 18.1661 16.1194 18.1661C16.175 18.1661 16.2864 18.1661 16.3421 18.054C16.4535 17.942 16.4535 17.774 16.3421 17.6619C16.2864 17.6619 15.6739 17.0457 14.4489 17.0457H11.108C10.3841 17.0457 9.27049 16.2054 8.21255 15.4211C7.04323 14.5248 5.92963 13.6846 4.98302 13.6846H0.528432C0.361386 13.6846 0.25 13.7966 0.25 13.9647C0.25 14.1327 0.361386 14.2448 0.528432 14.2448H4.98302C5.70686 14.2448 6.82052 15.0851 7.87846 15.8694C9.04778 16.7656 10.1614 17.6059 11.108 17.6059H14.4489C15.3955 17.6059 15.8967 18.1101 15.8967 18.1101Z" stroke="#9B77F0" stroke-width="0.5"/>\n<path d="M23.1674 3.25589C23.0014 3.14154 18.1226 0.325588 14.706 0.262713C10.7293 0.18953 9.02856 1.27098 8.91645 1.26886L1.26908 5.8016C0.81695 6.01581 0.472698 6.45458 0.351443 6.95308C0.230189 7.45158 0.275947 8.00877 0.547832 8.45889C1.03452 9.41362 2.26168 9.71441 3.16703 9.23034L9.66551 6.23426C10.7389 5.75328 11.8591 5.7739 14.0435 5.8141C16.2279 5.8543 19.5223 6.47127 19.5783 6.4723C19.7453 6.53105 19.9154 6.42289 19.9185 6.25603C19.9776 6.09021 19.8686 5.9213 19.7006 5.9182C19.5326 5.91511 16.2942 5.29917 14.0538 5.25794C11.7574 5.21568 10.6372 5.19507 9.44968 5.78524L2.9512 8.78132C2.61207 8.94199 2.21899 8.99044 1.88498 8.87299C1.55096 8.75555 1.27498 8.52795 1.0571 8.19012C0.839226 7.85229 0.790337 7.46195 0.90852 7.13031C1.0267 6.79866 1.25687 6.46908 1.596 6.30841L9.24336 1.77567C9.24336 1.77567 10.9431 0.749873 14.6958 0.818933C17.9444 0.878716 22.8802 3.64011 22.9351 3.69673C22.9902 3.75343 24.1001 4.3302 26.3965 4.37246C26.5646 4.37555 26.6787 4.26636 26.6817 4.0995C26.6848 3.93265 26.5748 3.81933 26.4068 3.81624C24.2784 3.77707 23.1674 3.25589 23.1674 3.25589Z" fill="#9B77F0"/>\n<path d="M10.8753 7.48057C10.8203 7.42394 10.7083 7.42188 10.6523 7.42085C10.5963 7.41982 10.4842 7.41776 10.4262 7.52799C10.3121 7.63712 10.309 7.80397 10.419 7.91729C10.475 7.91832 11.0799 8.54148 12.3121 8.56415L15.6727 8.626C16.4008 8.6394 17.5057 9.49428 18.5556 10.2925C19.7154 11.204 20.8202 12.0589 21.7724 12.0764L26.2533 12.1589C26.4213 12.162 26.5354 12.0528 26.5384 11.886C26.5415 11.7191 26.4315 11.6058 26.2635 11.6027L21.7826 11.5202C21.0545 11.5068 19.9497 10.6519 18.8998 9.85369C17.74 8.94218 16.6352 8.0873 15.683 8.06978L12.3223 8.00793C11.3701 7.99041 10.8753 7.48057 10.8753 7.48057Z" fill="#9B77F0"/>\n<path d="M23.1674 3.25589C23.0014 3.14154 18.1226 0.325588 14.706 0.262713C10.7293 0.18953 9.02856 1.27098 8.91645 1.26886L1.26908 5.8016C0.81695 6.01581 0.472698 6.45458 0.351443 6.95308C0.230189 7.45158 0.275947 8.00877 0.547832 8.45889C1.03452 9.41362 2.26168 9.71441 3.16703 9.23034L9.66551 6.23426C10.7389 5.75328 11.8591 5.7739 14.0435 5.8141C16.2279 5.8543 19.5223 6.47127 19.5783 6.4723C19.7453 6.53105 19.9154 6.42289 19.9185 6.25603C19.9776 6.09021 19.8686 5.9213 19.7006 5.9182C19.5326 5.91511 16.2942 5.29917 14.0538 5.25794C11.7574 5.21568 10.6372 5.19507 9.44968 5.78524L2.9512 8.78132C2.61207 8.94199 2.21899 8.99044 1.88498 8.87299C1.55096 8.75555 1.27498 8.52795 1.0571 8.19012C0.839226 7.85229 0.790337 7.46195 0.90852 7.13031C1.0267 6.79866 1.25687 6.46908 1.596 6.30841L9.24336 1.77567C9.24336 1.77567 10.9431 0.749873 14.6958 0.818933C17.9444 0.878716 22.8802 3.64011 22.9351 3.69673C22.9902 3.75343 24.1001 4.3302 26.3965 4.37246C26.5646 4.37555 26.6787 4.26636 26.6817 4.0995C26.6848 3.93265 26.5748 3.81933 26.4068 3.81624C24.2784 3.77707 23.1674 3.25589 23.1674 3.25589Z" stroke="#9B77F0" stroke-width="0.5"/>\n<path d="M10.8753 7.48057C10.8203 7.42394 10.7083 7.42188 10.6523 7.42085C10.5963 7.41982 10.4842 7.41776 10.4262 7.52799C10.3121 7.63712 10.309 7.80397 10.419 7.91729C10.475 7.91832 11.0799 8.54148 12.3121 8.56415L15.6727 8.626C16.4008 8.6394 17.5057 9.49428 18.5556 10.2925C19.7154 11.204 20.8202 12.0589 21.7724 12.0764L26.2533 12.1589C26.4213 12.162 26.5354 12.0528 26.5384 11.886C26.5415 11.7191 26.4315 11.6058 26.2635 11.6027L21.7826 11.5202C21.0545 11.5068 19.9497 10.6519 18.8998 9.85369C17.74 8.94218 16.6352 8.0873 15.683 8.06978L12.3223 8.00793C11.3701 7.99041 10.8753 7.48057 10.8753 7.48057Z" stroke="#9B77F0" stroke-width="0.5"/>\n' }
    })
  );

const RetirementIcon: ComponentType<SVGProps<SVGSVGElement>> = (props) =>
  createElement(
    "svg",
    {
      width: "36",
      height: "36",
      viewBox: "0 0 36 36",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
    },
    createElement("g", {
      dangerouslySetInnerHTML: { __html: '\n<path d="M0.750061 20.1918C0.809709 19.6012 1.35848 18.4202 3.07638 18.4202C3.49392 18.5275 4.32901 19.0322 4.32901 20.1918C4.32901 21.3514 4.32901 30.509 4.32901 34.428M14.8869 3.18347H34.7501V17.0341C34.7501 18.3226 34.249 21.5437 32.2448 24.1205C30.2406 26.6974 24.3711 30.5627 21.6869 32.1733L17.2132 29.4353M18.2869 14.7794V7.53194H24.729V13.3299H31.529V19.45H24.729V25.57H18.2869M6.83425 12.0415C7.3711 11.0751 9.16057 9.17469 12.0237 9.30353C15.6027 9.46459 16.4974 12.5246 17.2132 15.1015C17.929 17.6784 18.6448 19.45 18.8237 20.4163C19.0027 21.3826 17.2132 23.6374 16.6764 25.0869C16.1395 26.5364 15.7816 28.9522 15.9606 31.2069C16.1037 33.0107 16.0202 33.1396 15.9606 32.9785C15.9606 33.5691 15.6027 34.7501 14.1711 34.7501C12.3816 34.7501 12.3816 33.1396 12.0237 32.1733C11.6658 31.2069 11.129 27.6637 11.3079 26.0532C11.4869 24.4427 12.5606 21.7047 12.5606 20.8995C12.5606 20.2552 10.8904 16.1215 10.0553 14.1352C9.57811 14.9405 8.26583 16.7443 6.83425 17.5173C5.04478 18.4836 3.07636 18.8058 2.00267 18.0005C0.92899 17.1952 0.92899 15.1015 2.36057 15.1015C3.79215 15.1015 5.93952 14.2962 6.83425 12.0415ZM7.19217 1.57295C7.6097 1.25084 8.76687 0.638832 10.0553 0.767676C11.6659 0.92873 13.4553 2.05609 13.6343 4.31085C13.8132 6.56561 11.8448 7.85405 9.51848 7.85405C7.19217 7.85405 6.29743 6.08245 5.93953 4.79402C5.58164 3.50558 6.65532 1.9021 7.19217 1.57295Z" stroke="#9B77F0" stroke-width="1.5" stroke-linecap="round"/>\n' }
    })
  );

const DisabilityInsuranceIcon: ComponentType<SVGProps<SVGSVGElement>> = (props) =>
  createElement(
    "svg",
    {
      width: "29",
      height: "34",
      viewBox: "0 0 29 34",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
    },
    createElement("g", {
      dangerouslySetInnerHTML: { __html: '\n<path d="M0.941063 9.47443H5.90871L7.20795 17.4729C6.76056 17.554 6.32634 17.6729 5.90871 17.8263C2.89799 18.9317 0.75 21.824 0.75 25.218C0.75 29.5655 4.27433 33.0899 8.62182 33.0899C12.9693 33.0899 16.4936 29.5655 16.4936 25.218C16.4936 24.687 16.441 24.1682 16.3408 23.6666C16.2771 23.4195 16.1268 22.8947 16.0351 22.7724C15.9542 22.6646 17.2928 22.7073 18.2132 22.7538M27.3078 27.4726H21.0792L18.5571 22.7724C18.453 22.7664 18.3369 22.7601 18.2132 22.7538M18.2132 22.7538V17.3462C18.2514 16.3782 17.7929 14.4421 15.653 14.4421C14.1261 14.4421 11.3152 14.4421 9.08037 14.4421M6.78761 14.4421C7.37874 14.4421 8.18312 14.4421 9.08037 14.4421M9.08037 14.4421L8.2779 10.5444C8.18874 9.42348 8.6906 7.14345 11.4113 6.9906C12.2265 7.02881 13.9716 7.54086 14.4301 9.28336C14.8887 11.0259 15.2836 13.3466 15.4237 14.2892" stroke="#9B77F0" stroke-width="1.5" stroke-linecap="round"/>\n<path d="M13.7625 0.75C14.219 0.758359 14.6098 0.885053 14.8845 1.16895C15.3402 1.63979 15.5318 2.11955 15.574 2.6084C15.6178 3.11677 15.5035 3.68405 15.2595 4.31152C14.8157 5.45257 13.6058 6.25107 12.5232 5.96094C12.0893 5.84452 11.7419 5.44742 11.5261 4.7959C11.3123 4.14999 11.2951 3.43376 11.3816 3.01562C11.5849 2.03288 12.0394 1.32616 12.5066 1.00977C12.5222 1.00045 12.5376 0.99231 12.5515 0.984375L12.614 0.958984C12.8585 0.858299 13.3017 0.741622 13.7625 0.75Z" stroke="#9B77F0" stroke-width="1.5" stroke-linecap="round"/>\n<path d="M4.44679 21.9132C6.27565 21.9673 8.08456 20.6743 8.7604 20.021C9.6204 21.4267 12.0398 21.8682 13.142 21.9132C13.7081 26.898 10.4568 29.6579 8.7604 30.4148C4.44951 27.9495 4.08846 23.7199 4.44679 21.9132Z" stroke="#9B77F0" stroke-width="1.5" stroke-linecap="round"/>\n<path d="M21.5377 27.4901C20.667 28.0197 20.0856 28.9775 20.0856 30.071C20.0856 31.7383 21.4371 33.0898 23.1044 33.0898C24.7716 33.0898 26.1232 31.7383 26.1232 30.071C26.1232 28.9147 25.5494 27.9971 24.5947 27.4901" stroke="#9B77F0" stroke-width="1.5" stroke-linecap="round"/>\n<path d="M18.175 16.6583H19.9328C20.5188 16.6329 21.8511 16.88 22.4931 18.0722C23.1351 19.2644 24.2636 21.7788 24.7476 22.887C24.9132 23.3838 24.9922 24.4843 23.9834 24.9123C22.9746 25.3403 22.3657 24.8613 22.1874 24.5684L20.2003 20.4414H18.175" stroke="#9B77F0" stroke-width="1.5" stroke-linecap="round"/>\n' }
    })
  );

const BusinessInsuranceIcon: ComponentType<SVGProps<SVGSVGElement>> = (props) =>
  createElement(
    "svg",
    {
      width: "32",
      height: "35",
      viewBox: "0 0 32 35",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
    },
    createElement("g", {
      dangerouslySetInnerHTML: { __html: '\n<path d="M21.1898 14.9875L15.353 13.697C14.8532 13.6254 13.6395 13.8476 13.2111 14.4498M13.2111 14.4498C12.7827 15.052 11.5689 16.708 10.962 17.5683C11.2298 17.9088 11.9795 18.5791 12.8362 18.5361C13.693 18.4931 15.0853 17.0127 15.6743 16.2779L22.1537 21.7083M13.2111 14.4498L9.90334 14.8489M22.1537 21.7083H22.9569M22.1537 21.7083C22.1537 22.6976 21.0113 22.7299 20.4401 22.6224M24.0814 13.3207L20.9756 14.2347L23.1711 22.2998L30.7502 19.2582M8.12397 21.7083L14.0679 26.4398C14.3356 26.5832 14.9996 26.7624 15.5137 26.3323C16.0277 25.9021 15.9421 25.3286 15.835 25.0956M15.835 25.0956C16.2812 25.472 17.3772 26.0957 18.1911 25.5795C19.005 25.0634 18.8158 24.4325 18.6195 24.1816M15.835 25.0956L12.3543 22.1385M13.9072 20.3641L18.6195 24.1816C18.9051 24.4504 19.669 24.8268 20.4401 24.1816C21.2112 23.5364 20.7614 22.8733 20.4401 22.6224L15.353 18.5361M7.21364 13.3207L10.1053 14.0734L7.96332 22.2998L0.750244 19.2582" stroke="#9B77F0" stroke-width="1.5" stroke-linecap="round"/>\n<path d="M1.84403 15.6018C1.34403 12.7268 1.47944 9.14347 1.60965 7.71118C7.73465 7.52368 13.4326 3.20597 15.5159 1.07056C17.6253 3.20597 23.3597 7.52368 29.4222 7.71118C29.5784 8.93514 29.7503 12.2268 29.1878 15.6018" stroke="#9B77F0" stroke-width="1.5" stroke-linecap="round"/>\n<path d="M3.09399 24.5081C5.15129 26.5914 9.92212 31.9612 15.3596 33.9612C18.2502 32.6591 24.3752 28.3831 27.6252 24.5081" stroke="#9B77F0" stroke-width="1.5" stroke-linecap="round"/>\n' }
    })
  );

import type { FaqItem } from "./faqs";

export type Service = {
  slug: string;
  title: string;
  cardDescription: string;
  icon: LucideIcon | ComponentType<SVGProps<SVGSVGElement>>;
  metaTitle: string;
  metaDescription: string;
  problemHeading: string[];
  problems: { title: string; body: string }[];
  explanation: { heading: string; body: string[] };
  considerations: string[];
  faqs: FaqItem[];
  featured?: boolean;
};

const lifeProblems = [
  {
    title: "Coverage from work is not enough",
    body: "Group life through your employer is usually 1x salary and disappears the day you leave. For most California families, that's a fraction of what's actually needed.",
  },
  {
    title: "Your old term policy is about to expire",
    body: "If your term is ending, re-shop early and lock new coverage before the gap.",
  },
  {
    title: "You want both protection AND cash value growth",
    body: "Indexed Universal Life (IUL) can provide lifetime life insurance protection along with potential cash value growth opportunities tied to market index performance.",
  },
  {
    title: "You don't know how much your family really needs",
    body: "We calculate exact coverage needs based on debt, income replacement, and future expenses like college and retirement.",
  },
];

export const services: Service[] = [
  {
    slug: "health-insurance",
    title: "Health Insurance",
    icon: HealthInsuranceIcon,
    featured: true,
    cardDescription:
      "Individual and family medical plans compared across California carriers, networks and subsidy eligibility.",
    metaTitle: "Health Insurance in California | Charlie M Richardson",
    metaDescription:
      "Compare individual and family health insurance plans across California carriers, networks and subsidy options with Charlie M Richardson.",
    problemHeading: ["What's actually", "going wrong with", "your health coverage."],
    problems: [
      {
        title: "Your plan network doesn't include your doctors",
        body: "Premium alone is a poor way to pick a plan. We check that your physicians and hospitals are in-network before you enroll.",
      },
      {
        title: "You're paying for a tier you don't use",
        body: "Deductible, coinsurance and prescription tiers should match how you actually use care during the year.",
      },
      {
        title: "You may qualify for subsidies you never claimed",
        body: "Household income and family size can change marketplace subsidy eligibility. We check it at every renewal.",
      },
      {
        title: "A life change left you with a coverage gap",
        body: "Leaving a job, turning 26, moving or a new baby opens a special enrollment window with a deadline worth meeting.",
      },
    ],
    explanation: {
      heading: "Health insurance, explained without the jargon",
      body: [
        "Health insurance pays a defined share of your medical costs in exchange for a monthly premium. What varies between plans is the network of providers, the deductible you pay before cost sharing begins, and how prescriptions are tiered.",
        "We compare marketplace and off-exchange plans from California carriers, confirm your providers are covered, and check subsidy eligibility so you see the true monthly cost rather than the sticker price.",
      ],
    },
    considerations: [
      "Confirm your doctors and hospitals are in-network",
      "Compare total annual cost, not just the premium",
      "Check prescription tiers for medications you take",
      "Review subsidy eligibility at every renewal",
    ],
    faqs: [
      {
        question: "Do you have active health insurance?",
        answer:
          "If you do, bring the current plan summary. We compare it against available options so any change is a measured upgrade rather than a guess.",
      },
      {
        question: "How much health insurance coverage do I need?",
        answer:
          "The amount of health insurance range clearly depends on your health condition, lifestyle, age, and budget.Choose a plan that covers essentials like doctor visits, hospital stays, prescriptions, preventive care, surgeries and advance treatments that you may need.",
      },
      {
        question: "Where can I get health insurance?",
        answer:
          "You can get coverage through your job if your employer offers an employee-sponsored health plan, choose an individual medical health insurance provider or check ACA Marketplace.",
      },
      {
        question: "What types of health insurance plans are available?",
        answer:
          "Common options include Health Maintenance Organization (HMO), Preferred Provider Organization (PPO), Exclusive Provider Organization (EPO), and Point of Service (POS) plans. Each offers a different balance of cost, flexibility, and provider choice. Talk to us to know what fits you best.",
      },
      {
        question: "Can I get health insurance if I have a pre-existing condition?",
        answer:
          "According to Affordable Care Act (ACA), insurance companies cannot refuse coverage or charge you higher premiums because of a pre-existing health condition.",
      },
       {
        question: "Why should I get health insurance if I’m healthy?",
        answer:"Life is unpredictable. Even if you’re healthy today, unexpected illnesses or accidents can happen and lead to costly medical bills. Health insurance provides financial protection and can also help cover preventive care.",
      },
    ],
  },
  {
    slug: "medicare",
    title: "Medicare Plans",
    icon: MedicareIcon,
    featured: true,
    cardDescription:
      "Medicare Advantage, Supplement and Part D options reviewed against your doctors and prescriptions.",
    metaTitle: "Medicare Plans in California | Charlie M Richardson",
    metaDescription:
      "Medicare Advantage, Medigap Supplement and Part D plans compared for California residents, with enrollment timing guidance.",
    problemHeading: ["What's actually", "going wrong with", "your Medicare plan."],
    problems: [
      {
        title: "You missed an enrollment window",
        body: "Initial, annual and special enrollment periods each have deadlines, and late enrollment can carry a lifetime penalty.",
      },
      {
        title: "Your Part D plan doesn't cover your prescriptions well",
        body: "Formularies change every year. A plan that was ideal last year can become the most expensive option this year.",
      },
      {
        title: "You're unsure between Advantage and Supplement",
        body: "One trades a network for lower premiums, the other trades higher premiums for broader provider freedom. The right answer depends on how you use care.",
      },
      {
        title: "You never reviewed the plan after enrolling",
        body: "An annual review takes one conversation and often finds a plan that better matches this year's medications and doctors.",
      },
    ],
    explanation: {
      heading: "Choosing between Advantage, Supplement and Part D",
      body: [
        "Original Medicare covers hospital and medical services but leaves cost sharing in place. You close those gaps either with a Medicare Advantage plan or with a Medigap Supplement plus a stand-alone Part D drug plan.",
        "We run your prescriptions and providers through the available California plans and show what each option costs across a full year, not just the monthly premium.",
      ],
    },
    considerations: [
      "Enrollment periods and possible late penalties",
      "Whether your prescriptions sit on the plan formulary",
      "Provider network breadth versus monthly premium",
      "Annual review before each plan year begins",
    ],
    faqs: [
      {
        question: "When should I start looking at Medicare?",
        answer:
          "About three months before you turn 65, or before employer coverage ends if you are working past 65.",
      },
      {
        question: "What is the difference between Advantage and Supplement?",
        answer:
          "Advantage bundles coverage through a network-based plan, often with extra benefits. A Supplement pays a share of Original Medicare's out-of-pocket costs and keeps broad provider access, usually with a higher premium.",
      },
      {
        question: "Do I need a separate drug plan?",
        answer:
          "With a Supplement, usually yes. Many Advantage plans include drug coverage. We confirm your medications are covered either way.",
      },
      {
        question: "Can I change plans later?",
        answer:
          "Advantage and Part D plans can generally be changed during the annual enrollment period. Supplement changes may involve medical underwriting.",
      },
      {
        question: "Is there a cost to work with you?",
        answer: "No. Consultations and plan comparisons are free.",
      },
    ],
  },
  {
    slug: "life-insurance",
    title: "Life Insurance",
    icon: LifeInsuranceIcon,
    featured: true,
    cardDescription:
      "Term, Whole and Permanent Life options for estate planning, income replacement and guaranteed protection.",
    metaTitle: "Life Insurance in California | Charlie M Richardson",
    metaDescription:
      "Term, whole and permanent life insurance for California families and business owners, compared across 30+ A-rated carriers.",
    problemHeading: ["What's actually", "going wrong with", "your life insurance."],
    problems: lifeProblems,
    explanation: {
      heading: "Term, whole and permanent coverage",
      body: [
        "Term life covers a set number of years at the lowest cost per dollar of protection, which suits mortgage years and income replacement while children are at home. Permanent coverage lasts for life and builds cash value over time.",
        "We size the death benefit against your debt, income and future obligations, then compare carriers so the same coverage is not overpriced.",
      ],
    },
    considerations: [
      "Coverage amount based on real obligations, not a rule of thumb",
      "Term length matched to your mortgage and children's ages",
      "Carrier financial strength ratings",
      "Conversion options if your needs change later",
    ],
    faqs: [
      {
        question: "How much life insurance do I actually need?",
        answer:
          "We total outstanding debt, years of income to replace, education costs and final expenses, then subtract existing coverage and savings.",
      },
      {
        question: "Is term or permanent coverage better?",
        answer:
          "Term is the most cost-effective way to cover a defined period. Permanent coverage suits lifetime needs such as estate planning or a special-needs dependent. Many families use both.",
      },
      {
        question: "Can I keep coverage if I change jobs?",
        answer:
          "An individual policy belongs to you and follows you between employers, unlike group coverage that ends with the job.",
      },
      {
        question: "What if I have a health condition?",
        answer:
          "Carriers underwrite conditions very differently. Placing the application with the right carrier often makes a large difference in price.",
      },
      {
        question: "How long does approval take?",
        answer:
          "Accelerated underwriting can approve qualifying applicants in days. Fully underwritten cases typically take a few weeks.",
      },
    ],
  },
  {
    slug: "retirement-planning",
    title: "Retirement Planning",
    icon: RetirementIcon,
    featured: true,
    cardDescription:
      "Annuity and income strategies designed to turn savings into predictable retirement cash flow.",
    metaTitle: "Retirement Planning in California | Charlie M Richardson",
    metaDescription:
      "Retirement income strategies, annuities and rollovers reviewed for California families planning predictable retirement cash flow.",
    problemHeading: ["What's actually", "going wrong with", "your retirement plan."],
    problems: [
      {
        title: "You have savings but no income plan",
        body: "A balance is not a paycheck. The sequence in which you draw accounts changes how long the money lasts.",
      },
      {
        title: "Old employer accounts are scattered",
        body: "Orphaned 401(k)s from previous jobs often sit in default investments with fees nobody is watching.",
      },
      {
        title: "A market drop early in retirement could hurt",
        body: "Withdrawals during a downturn compound the loss. A portion of guaranteed income reduces that pressure.",
      },
      {
        title: "You are unsure when to claim Social Security",
        body: "Claiming age changes lifetime benefits significantly, and the right timing depends on health, spouse and other income.",
      },
    ],
    explanation: {
      heading: "Building income you can count on",
      body: [
        "Retirement planning here means converting accumulated savings into reliable monthly income while managing longevity, taxes and market risk.",
        "We review existing accounts, discuss where guaranteed income products such as annuities may fit alongside your investments, and explain the fees and surrender terms in plain language.",
      ],
    },
    considerations: [
      "Guaranteed income floor versus market exposure",
      "Rollover options for old employer plans",
      "Product fees, surrender periods and liquidity",
      "Tax treatment of each income source",
    ],
    faqs: [
      {
        question: "When should I start planning?",
        answer:
          "Ten years out gives the most flexibility, but a plan built five years out or at retirement still improves outcomes.",
      },
      {
        question: "Are annuities right for everyone?",
        answer:
          "No. They suit people who want a guaranteed income floor and can accept limited liquidity. We explain the trade-offs before anything is recommended.",
      },
      {
        question: "Can I roll over an old 401(k)?",
        answer:
          "Usually yes. We compare staying in the plan, rolling to an IRA, and other options with the costs of each.",
      },
      {
        question: "How do you get paid?",
        answer:
          "Carriers pay commission on placed products. Your consultation and comparison cost nothing.",
      },
      {
        question: "Do you coordinate with my accountant?",
        answer:
          "Yes. Tax treatment matters, and we are glad to work alongside your tax professional.",
      },
    ],
  },
  {
    slug: "disability-insurance",
    title: "Disability Insurance",
    icon: DisabilityInsuranceIcon,
    featured: true,
    cardDescription:
      "Income protection that keeps paying if illness or injury stops you from working.",
    metaTitle: "Disability Insurance in California | Charlie M Richardson",
    metaDescription:
      "Short and long-term disability income protection for California professionals, business owners and self-employed workers.",
    problemHeading: ["What's actually", "going wrong with", "your income protection."],
    problems: [
      {
        title: "State disability benefits replace only part of your pay",
        body: "For most households the gap between the benefit and actual expenses is significant and lasts as long as the disability.",
      },
      {
        title: "Group coverage may stop at the office door",
        body: "Employer disability plans often end when the job does, and benefits are usually taxable when the employer pays the premium.",
      },
      {
        title: "The definition of disability matters more than the price",
        body: "An own-occupation definition protects your specific profession. A weaker definition can deny a claim you expected to be covered.",
      },
      {
        title: "Self-employed income has no safety net",
        body: "Without an employer plan, an individual policy is the only thing standing between an injury and lost revenue.",
      },
    ],
    explanation: {
      heading: "Protecting the income everything else depends on",
      body: [
        "Disability insurance replaces a percentage of your income when illness or injury prevents you from working. Short-term policies bridge weeks or months; long-term policies can run to retirement age.",
        "We compare definitions of disability, elimination periods, benefit periods and riders so the policy pays in the situations you actually worry about.",
      ],
    },
    considerations: [
      "Own-occupation versus any-occupation definitions",
      "Elimination period and benefit period length",
      "Whether benefits are taxable",
      "Residual and cost-of-living riders",
    ],
    faqs: [
      {
        question: "How much of my income can be covered?",
        answer:
          "Carriers typically replace roughly 60 percent of gross income, and benefits from a personally paid policy are generally received tax free.",
      },
      {
        question: "Isn't state disability enough?",
        answer:
          "State programs are time limited and capped. Most professionals need private coverage on top.",
      },
      {
        question: "What is an elimination period?",
        answer:
          "The waiting time before benefits begin, commonly 30 to 90 days. A longer wait lowers the premium.",
      },
      {
        question: "Can self-employed people get coverage?",
        answer:
          "Yes, with income documented through tax returns. This is one of the most common cases we place.",
      },
      {
        question: "Does it cover mental health conditions?",
        answer:
          "Many policies do, sometimes with a limited benefit period. We flag those limits before you apply.",
      },
    ],
  },
  {
    slug: "business-owner-protection",
    title: "Business Owner Protection",
    icon: BusinessInsuranceIcon,
    featured: true,
    cardDescription:
      "Key person, buy-sell funding and executive benefit strategies for California business owners.",
    metaTitle: "Business Owner Insurance in California | Charlie M Richardson",
    metaDescription:
      "Key person coverage, buy-sell funding and executive benefits for California business owners and partnerships.",
    problemHeading: ["What's actually", "going wrong with", "your business continuity."],
    problems: [
      {
        title: "The business depends on one or two people",
        body: "If a key person is gone, revenue, lender confidence and client relationships can go with them.",
      },
      {
        title: "There is no funded buy-sell agreement",
        body: "An agreement without funding leaves surviving partners negotiating with a family instead of executing a plan.",
      },
      {
        title: "Bank covenants require coverage you don't have",
        body: "Many commercial loans require life insurance on the principal. Missing it can complicate financing.",
      },
      {
        title: "Key employees have no reason to stay",
        body: "Executive benefit arrangements can reward the people your business cannot afford to lose.",
      },
    ],
    explanation: {
      heading: "Keeping the business standing when a person is not",
      body: [
        "Business protection uses life and disability coverage to fund the events that would otherwise force a sale or a shutdown: the loss of an owner, the loss of a key producer, or a partner's exit.",
        "We coordinate with your attorney and accountant so the coverage amounts match the agreements on paper.",
      ],
    },
    considerations: [
      "Valuation used to size buy-sell funding",
      "Key person coverage on revenue-critical staff",
      "Loan and lender coverage requirements",
      "Executive benefit arrangements for retention",
    ],
    faqs: [
      {
        question: "What is key person insurance?",
        answer:
          "A policy the business owns on an individual whose loss would materially hurt revenue. The business receives the benefit and uses it to stabilise operations.",
      },
      {
        question: "How is a buy-sell agreement funded?",
        answer:
          "Usually with life insurance on each owner so the surviving owners have the cash to purchase the departing owner's share at the agreed value.",
      },
      {
        question: "Can premiums be paid by the business?",
        answer:
          "Often yes, though tax treatment varies by structure. We review it with your accountant.",
      },
      {
        question: "Do you work with partnerships and S-corps?",
        answer: "Yes, along with sole proprietors and family-owned businesses.",
      },
      {
        question: "What if ownership changes?",
        answer:
          "Coverage should be reviewed whenever ownership, valuation or debt changes materially.",
      },
    ],
  },
  {
    slug: "group-health",
    title: "Group Health & Employee Benefits",
    icon: Users,
    cardDescription:
      "Employer-sponsored medical, dental, vision and supplemental benefits built around your team.",
    metaTitle: "Group Health & Employee Benefits California | Charlie M Richardson",
    metaDescription:
      "Employer-sponsored group health, dental, vision and supplemental employee benefits for California businesses.",
    problemHeading: ["What's actually", "going wrong with", "your benefits package."],
    problems: [
      {
        title: "Renewal increases arrive with no alternatives",
        body: "A renewal letter is a starting point, not a verdict. We market the group before you accept an increase.",
      },
      {
        title: "The plan design doesn't match the workforce",
        body: "A young team and a senior team need different tiers, networks and contribution structures.",
      },
      {
        title: "Employees don't understand what they have",
        body: "Benefits only retain staff when people can explain them. Enrollment support matters.",
      },
      {
        title: "Compliance details fall through the cracks",
        body: "Eligibility rules, notices and filings need an owner. We keep the calendar visible.",
      },
    ],
    explanation: {
      heading: "Benefits your team understands and your budget survives",
      body: [
        "Group benefits combine medical coverage with dental, vision, life and supplemental products under an employer-sponsored plan. Design choices around contribution levels and plan tiers drive both cost and satisfaction.",
        "We market the group across carriers each year, present options side by side, and run enrollment meetings so employees actually use what you are paying for.",
      ],
    },
    considerations: [
      "Contribution strategy and employee cost share",
      "Network fit for where your team lives",
      "Ancillary lines such as dental, vision and life",
      "Enrollment communication and compliance calendar",
    ],
    faqs: [
      {
        question: "How small can a group be?",
        answer: "Many California carriers write groups starting at two enrolled employees.",
      },
      {
        question: "When can we change carriers?",
        answer:
          "Typically at renewal, though certain qualifying events allow a mid-year change. We plan the marketing 60 to 90 days ahead.",
      },
      {
        question: "Do you help with employee enrollment?",
        answer: "Yes, including group meetings and one-on-one sessions.",
      },
      {
        question: "Can we offer dental and vision only?",
        answer: "Yes. Ancillary-only packages are a common starting point for smaller teams.",
      },
      {
        question: "Is there a fee for your service?",
        answer: "No. We are compensated by the carrier on placed business.",
      },
    ],
  },
  {
    slug: "iul",
    title: "Indexed Universal Life (IUL)",
    icon: TrendingUp,
    cardDescription:
      "Permanent protection with cash value crediting tied to index performance, subject to caps and floors.",
    metaTitle: "Indexed Universal Life (IUL) California | Charlie M Richardson",
    metaDescription:
      "How Indexed Universal Life works in California: lifetime protection, index-linked cash value, caps, floors and real costs explained.",
    problemHeading: ["What's actually", "going wrong with", "your permanent policy."],
    problems: [
      {
        title: "The illustration was never explained",
        body: "Illustrated rates are not guarantees. We read the guaranteed column with you, not just the projection.",
      },
      {
        title: "Funding levels are too thin",
        body: "An underfunded policy can lapse later, exactly when replacing coverage is most expensive.",
      },
      {
        title: "Caps and participation rates were ignored",
        body: "These terms determine how much index performance is actually credited to your cash value.",
      },
      {
        title: "Nobody reviews the policy annually",
        body: "Costs, crediting and funding all shift over time. An annual statement review keeps it on track.",
      },
    ],
    explanation: {
      heading: "What an IUL does and does not do",
      body: [
        "An Indexed Universal Life policy provides a death benefit for life as long as it stays funded, with a cash value component credited based on the performance of a chosen index, limited by a cap and protected by a floor.",
        "It is not a market investment and it is not a substitute for a retirement account. Used properly, it can complement them. We show guaranteed and non-guaranteed figures side by side before you decide.",
      ],
    },
    considerations: [
      "Guaranteed versus illustrated values",
      "Cap, floor and participation rate mechanics",
      "Policy charges and funding requirements",
      "Access to cash value through loans and withdrawals",
    ],
    faqs: [
      {
        question: "Is an IUL an investment?",
        answer:
          "No. It is life insurance with an index-linked crediting method. Values are subject to policy charges and carrier terms.",
      },
      {
        question: "What happens in a down market?",
        answer:
          "The floor limits index-linked crediting losses, though policy charges continue to apply.",
      },
      {
        question: "Can I access the cash value?",
        answer:
          "Typically through loans or withdrawals, which reduce the death benefit and can affect policy performance.",
      },
      {
        question: "Who is it usually suited to?",
        answer:
          "People who want lifetime coverage, already fund their retirement accounts, and can commit to consistent premiums.",
      },
      {
        question: "How do I know if mine is on track?",
        answer: "Bring your annual statement. We review funding and projected values at no cost.",
      },
    ],
  },
  {
    slug: "personal-insurance",
    title: "Personal Insurance",
    icon: UserRound,
    cardDescription:
      "Individual coverage reviews across life, health and income protection for one household.",
    metaTitle: "Personal Insurance Review California | Charlie M Richardson",
    metaDescription:
      "A single household review across life, health, disability and Medicare coverage for individuals and families in California.",
    problemHeading: ["What's actually", "going wrong with", "your personal coverage."],
    problems: [
      {
        title: "Policies were bought one at a time",
        body: "Coverage collected over years often overlaps in places and leaves gaps in others.",
      },
      {
        title: "Beneficiaries are out of date",
        body: "Marriage, divorce and births all change who should receive a benefit. Paperwork rarely keeps up.",
      },
      {
        title: "Nobody has looked at the whole picture",
        body: "Life, health, disability and retirement decisions interact. Reviewing them together produces better answers.",
      },
      {
        title: "You're paying for coverage you no longer need",
        body: "As debt clears and children become independent, some coverage can be reduced or redirected.",
      },
    ],
    explanation: {
      heading: "One review across everything you hold",
      body: [
        "A personal insurance review looks at every policy in the household at once: life, health, disability, Medicare and retirement income.",
        "The output is a simple written summary showing what you have, what it costs, where the gaps are, and what to do first.",
      ],
    },
    considerations: [
      "Total household coverage versus total obligations",
      "Beneficiary designations on every policy",
      "Overlap between employer and individual coverage",
      "Priority order for any changes",
    ],
    faqs: [
      {
        question: "What should I bring to a review?",
        answer: "Current policy summaries or declaration pages, and any employer benefits guide.",
      },
      {
        question: "How long does it take?",
        answer: "Most reviews take one conversation of about 30 to 45 minutes.",
      },
      {
        question: "Will you tell me to replace everything?",
        answer:
          "No. Keeping existing coverage is often the right recommendation, and we will say so.",
      },
      {
        question: "Do you serve all of California?",
        answer: "Yes, by phone, video, or in person where practical.",
      },
      {
        question: "Is the review free?",
        answer: "Yes, with no obligation.",
      },
    ],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);

export const featuredServices = services.filter((s) => s.featured);

export type MenuGroup = { heading: string; items: { label: string; slug: string }[] };

export const serviceMenu: MenuGroup[] = [
  {
    heading: "Health/Medicare/Group",
    items: [
      { label: "Health, Medicare & Group Benefits", slug: "health-insurance" },
      { label: "Health Insurance", slug: "health-insurance" },
      { label: "Group Health & Employee Benefits", slug: "group-health" },
      { label: "Medicare Plans", slug: "medicare" },
    ],
  },
  {
    heading: "Life & Family Protection",
    items: [
      { label: "Life Insurance", slug: "life-insurance" },
      { label: "Indexed Universal Life (IUL)", slug: "iul" },
    ],
  },
  {
    heading: "Retirement & Financial",
    items: [{ label: "Retirement Planning", slug: "retirement-planning" }],
  },
  {
    heading: "Disability & Income Protection",
    items: [
      { label: "Disability Insurance", slug: "disability-insurance" },
      { label: "Business Owner Protection", slug: "business-owner-protection" },
    ],
  },
];

export const relatedServiceGrid = [
  { label: "Health Insurance", slug: "health-insurance" },
  { label: "Indexed Universal Life (IUL)", slug: "iul" },
  { label: "Retirement Planning", slug: "retirement-planning" },
  { label: "Disability & Income Protection", slug: "disability-insurance" },
  { label: "Disability Insurance", slug: "disability-insurance" },
  { label: "Business Owner Protection", slug: "business-owner-protection" },
  { label: "Personal Insurance", slug: "personal-insurance" },
  { label: "Group Health & Employee Benefits", slug: "group-health" },
];
