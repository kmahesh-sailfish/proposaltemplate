import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "parentPipesval" })
export class ParentPipesval implements PipeTransform {
  transform(obj) {
    console.log(obj);
    return obj.filter(o => o.ParentId == null);
  }
}
