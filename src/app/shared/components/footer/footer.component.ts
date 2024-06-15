import { Component } from '@angular/core';
import { IconsModule } from '@ngaox/icons';
import { environment } from '../../../core/environment';

type SocialLink = {
  label: string;
  title: string;
  url: string;
  iconName: string;
};

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [IconsModule],
  templateUrl: './footer.component.html',
  styles: ``,
})
export class FooterComponent {
  readonly version = environment.application.version || 'v1.0';
  readonly sha1 = (environment.application.commit || 'xxx').substring(0, 5);
  readonly links: SocialLink[] = [
    {
      label: 'Twitter',
      iconName: 'app:twitter',
      url: '//twitter.com/ngMorocco',
      title: 'Follow us on Twitter',
    },
    {
      label: 'Discord',
      iconName: 'app:discord',
      url: '//bit.ly/ngDiscord',
      title: 'Join our discord',
    },
    {
      label: 'GitHub',
      iconName: 'app:github',
      url: '//github.com/ngMorocco/ngx-darija',
      title: 'Angular In Darija @ GitHub',
    },
    {
      label: 'YouTube',
      iconName: 'app:youtube',
      url: '//bit.ly/ngDarija',
      title: 'Angular In Darija @ GitHub',
    },
  ];
}
