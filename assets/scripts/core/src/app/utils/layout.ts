import { NavigationComponent } from '../public/includes/navigation/navigation.component';
import { FooterComponent } from '../public/includes/footer/footer.component';


export function render(content) {
  return {
    'navigation' : NavigationComponent,
    'content'    : content,
    'footer'     : FooterComponent
  }
}