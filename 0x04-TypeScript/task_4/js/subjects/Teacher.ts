namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
    experienceTeachingC?: number; // optional property
    experienceTeachingReact?:number;
    experienceTeachingJava? : number;
  }
}