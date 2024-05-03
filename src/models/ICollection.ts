export interface ICollection {
  id: number;
  name?: string;
  image?: string;
  ingredients: [
    {
      name: string;
    },
  ];
  instructions: [
    {
      name: string;
    },
  ];
}