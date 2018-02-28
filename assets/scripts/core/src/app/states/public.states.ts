import { render } from '../utils/layout';
import { IndexComponent } from '../public/index/index.component';
import { AboutComponent } from '../public/about/about.component';


export const publicStates: Object[] = [
  {
    name : 'index',
    url  : '/',
    views: render(IndexComponent)
  },
  {
    name : 'about',
    url  : '/about/',
    views: render(AboutComponent)
  },
]