import "core-js/stable";
import "./../style/visual.less";
import * as d3 from 'd3';
import { Visual } from "./visual";
import { Dictionary } from "./dictionary";
export declare class Legend {
    private parentVisual;
    private width;
    private height;
    private legendContainer;
    private legendTitleRaw;
    private legendValuesRaw;
    private legendValuesDisplayNames;
    private legendValuesTooltips;
    private legendValuesDictionary;
    private legendType;
    private categoryName;
    private legendTitleSVG;
    private legendValuesSVG;
    private legendItemMargin;
    private legendSquareSize;
    private legendTitleMarginMultiplier;
    private legendItemSquareMarginMultiplier;
    private filterEnabled;
    constructor(parentVisual: Visual, width: number, height: number, legendContainer: d3.Selection<SVGGElement, any, HTMLDivElement, any>, legendTitleRaw: string | number, legendValuesRaw: string[], legendValuesDisplayNames: string[], legendValuesTooltips: string[], legendValuesDictionary: Dictionary, legendType: string, filterEnabled: boolean, categoryName: string);
    private initLegend;
    private drawLegendColourVisual;
    private drawLegendLineStyleVisual;
    private trimLegendItem;
}
