import { render } from '../utils/layout';
import { IndexComponent } from '../public/index/index.component';
import { AboutComponent } from '../public/about/about.component';
import { ProcessComponent } from '../public/process/process.component';


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
  {
    name : 'process',
    url  : '/process/',
    views: render(ProcessComponent)
  },
]