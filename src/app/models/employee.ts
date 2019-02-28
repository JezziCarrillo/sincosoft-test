export interface Employee {
  Nombres: string;
  Apellidos: string;
  Documento: number;
  cargo: string;
  Dependencia: string;
  Salario: string;
  Régimen: string;
  Rango: string;
  EPS: string;
  Fondo: string;
  Id?: string;
}

export interface EmployeeAPI {
  [index: string]: Employee;
}
