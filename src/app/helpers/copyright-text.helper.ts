import { environment } from 'environments/environment';
import { ProductType } from 'app/enums/product-type.enum';

export function getCopyrightHtml(productType?: ProductType): string {
  if (productType) {
    return `Tyrone Verta Pro Storage System <br /> © ${environment.buildYear}`;
  }
  return `Tyrone Verta Pro Storage System <br /> © ${environment.buildYear}`;
}
