/**
 * تقص النص لو كان أطول من عدد معين من الحروف وتضيف "..."
 * 
 * @param {string} text - النص
 * @param {number} [max=50] - أقصى عدد حروف
 * @returns {string} النص بعد القص أو كما هو
 */

export function textSlicer(text:string, max:number = 50){
    if(text.length>= max) return`${text.slice(0,max)}  ...  `;
    return text;
}