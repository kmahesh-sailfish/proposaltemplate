import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "parentPipesval" })
export class ParentPipesval implements PipeTransform {
  transform(obj) {
    return obj.filter(o => o.ParentId == null);
  }
}

@Pipe({ name: "childPipesval" })
export class ChildPipesval implements PipeTransform {
  transform(obj: any, id: any) {
    console.log(obj, id);
    return obj.filter(o => o.ParentId == id.ParentId);
  }
}
