import IDadosVeiculo from "./IDadosVeiculo";
import IImagemVeiculo from "./IImagemVeiculo";

export default interface IVehicle {
  id_veiculo: number;
  nome_veiculo: string;
  modelo: string;
  ano: number;
  km: number;
  preco: number;
  status: 'D' | 'V';
  visualizacoes: number;
  id_fabricante: number;
  id_tipo_veiculo: number;
  id_categoria: number;
  dados_veiculo?: IDadosVeiculo;
  imagens_veiculo?: IImagemVeiculo[];
}
