import { Technology } from '@models/technology.model';

import Angular from './angular.tech.json';
import Arch from './arch.tech.json';
import Bash from './bash.tech.json';
import Bootstrap from './bootstrap.tech.json';
import Bun from './bun.tech.json';
import Cpp from './cpp.tech.json';
import Csharp from './cs.tech.json';
import CSS from './css.tech.json';
import Discord from './discord.tech.json';
import DiscordJS from './discordjs.tech.json';
import Docker from './docker.tech.json';
import Express from './express.tech.json';
import Git from './git.tech.json';
import Github from './github.tech.json';
import HTML from './html.tech.json';
import Java from './java.tech.json';
import JavaScript from './js.tech.json';
import Kubernetes from './kubernetes.tech.json';
import Laravel from './laravel.tech.json';
import Linux from './linux.tech.json';
import MongoDB from './mongodb.tech.json';
import MySQL from './mysql.tech.json';
import NestJS from './nestjs.tech.json';
import NodeJS from './nodejs.tech.json';
import Notion from './notion.tech.json';
import PHP from './php.tech.json';
import Powershell from './powershell.tech.json';
import Python from './python.tech.json';
import Qt from './qt.tech.json';
import SCSS from './scss.tech.json';
import TailWindCSS from './tailwindcss.tech.json';
import TypeScript from './typescript.tech.json';
import Unity from './unity.tech.json';
import VisualStudio from './visualstudio.tech.json';
import VisualStudioCode from './vscode.tech.json';

let techs: Technology[] = [
  Angular,
  Arch,
  Bash,
  Bootstrap,
  Bun,
  Cpp,
  Csharp,
  CSS,
  Discord,
  DiscordJS,
  Docker,
  Express,
  Git,
  Github,
  HTML,
  Java,
  JavaScript,
  Kubernetes,
  Laravel,
  Linux,
  MongoDB,
  MySQL,
  NestJS,
  NodeJS,
  Notion,
  PHP,
  Powershell,
  Python,
  Qt,
  SCSS,
  TailWindCSS,
  TypeScript,
  Unity,
  VisualStudio,
  VisualStudioCode,
];

// Quelques manipulations...
techs = techs.map((tech) => {
  tech.isTool = tech.isTool || false;
  return tech;
});

export const Technologies: Technology[] = techs;
