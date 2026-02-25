import { environment } from 'environments/environment';
import { ProductType } from 'app/enums/product-type.enum';

export function getCopyrightHtml(productType?: ProductType): string {
  if (productType) {
    return `Tyrone Hfile Storage System <br /> © ${environment.buildYear}`;
  }
  return `Tyrone Hfile Storage System <br /> © ${environment.buildYear}`;
}
