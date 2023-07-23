declare module "*.scss" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}
declare module "*.svg" {
  const SVG: SVGSVGElement;
  export default SVG;
}

/* declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
*/
