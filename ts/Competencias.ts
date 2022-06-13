abstract class Competencias extends NormalSection {
    getTitle(): string {
        return this.lang.title;
    }
    abstract lang: {
        title:string;
        lengProg: string;
        aniosDeExpe: string;
        goodSkill: string;
        midSkill: string;
        basicSkill: string;
        level: string;
        DB:string;
        linux:string;
        web:string;
        robotic:string;
        edit:string;
    };

    private skills:{
        name: string;
        type: string;
        src: string;
        startedYear: number;
        level: number;
    }[] = [
        {
            "name": "C",
            "type": "progLang",
            "src": "./img/programLangs/C.png",
            "startedYear": 2020,
            "level": 80
        },
        {
            "name": "Java",
            "type": "progLang",
            "src": "./img/programLangs/Java.png",
            "startedYear": 2021,
            "level": 80
        },
        {
            "name": "C++",
            "type": "progLang",
            "src": "./img/programLangs/C++.png",
            "startedYear": 2022,
            "level": 70
        },
        {
            "name": "JavaScript",
            "type": "progLang",
            "src": "./img/programLangs/Js.png",
            "startedYear": 2020,
            "level": 80
        },
        {
            "name": "Python",
            "type": "progLang",
            "src": "./img/programLangs/Python.png",
            "startedYear": 2021,
            "level": 60
        },
        {
            "name": "MySQL",
            "type": "DB",
            "src": "./img/programLangs/MySQL.png",
            "startedYear": 2022,
            "level": 60
        },
        {
            "name": "MariaDB",
            "type": "DB",
            "src": "./img/programLangs/MariaDB.png",
            "startedYear": 2021,
            "level": 50
        },
        {
            "name": "Ubuntu",
            "type": "linux",
            "src": "./img/programLangs/Ubuntu.png",
            "startedYear": 2020,
            "level": 50
        },
        {
            "name": "Kali",
            "type": "linux",
            "src": "./img/programLangs/Kali.png",
            "startedYear": 2021,
            "level": 30
        },
        {
            "name": "HTML",
            "type": "web",
            "src": "./img/programLangs/Html.png",
            "startedYear": 2020,
            "level": 90
        },
        {
            "name": "CSS",
            "type": "web",
            "src": "./img/programLangs/Css.png",
            "startedYear": 2020,
            "level": 50
        },
        {
            "name": "JavaScript",
            "type": "web",
            "src": "./img/programLangs/Js.png",
            "startedYear": 2020,
            "level": 70
        },
        {
            "name": "Arduino",
            "type": "robotic",
            "src": "./img/programLangs/Arduino.png",
            "startedYear": 2020,
            "level": 60
        },
        {
            "name": "Adobe Photoshop",
            "type": "edit",
            "src": "./img/programLangs/Photoshop.png",
            "startedYear": 2016,
            "level": 40
        },
        {
            "name": "Adobe Premiere",
            "type": "edit",
            "src": "./img/programLangs/Premiere.png",
            "startedYear": 2019,
            "level": 30
        },
        {
            "name": "R",
            "type": "progLang",
            "src": "./img/programLangs/R.png",
            "startedYear": 2021,
            "level": 25
        }

    ]

    constructor(short: boolean) {
        super(short);
    }
    getHtmlId(): string {
        return "competencias";
    }

    shortVersion(): string {
        return HTMLmanager.insideLabels(HTMLmanager.insideLabels(this.normalP(this.subtitle(this.lang.lengProg)) + this.getSkillsShort(this.getSkillsByType("progLang"))
        ,"div",'class="div_skill_group"')

        + HTMLmanager.insideLabels(this.normalP(this.subtitle(this.lang.DB)) + this.getSkillsShort(this.getSkillsByType("DB"))
        ,"div",'class="div_skill_group"')

        + HTMLmanager.insideLabels(this.normalP(this.subtitle(this.lang.linux)) + this.getSkillsShort(this.getSkillsByType("linux"))
        ,"div",'class="div_skill_group"')

        + HTMLmanager.insideLabels(this.normalP(this.subtitle(this.lang.web)) + this.getSkillsShort(this.getSkillsByType("web"))
        ,"div",'class="div_skill_group"')

        + HTMLmanager.insideLabels(this.normalP(this.subtitle(this.lang.robotic)) + this.getSkillsShort(this.getSkillsByType("robotic"))
        ,"div",'class="div_skill_group"')

        + HTMLmanager.insideLabels(this.normalP(this.subtitle(this.lang.edit)) + this.getSkillsShort(this.getSkillsByType("edit"))
        ,"div",'class="div_skill_group"')
        ,"div",'class="div_skill_groups"')
        ;
    }

    largeVersion(): string {
        return HTMLmanager.insideLabels(HTMLmanager.insideLabels(this.normalP(this.subtitle(this.lang.lengProg)) + this.getSkillsLarge(this.getSkillsByType("progLang"))
        ,"div",'class="div_skill_group"')

        + HTMLmanager.insideLabels(this.normalP(this.subtitle(this.lang.DB)) + this.getSkillsLarge(this.getSkillsByType("DB"))
        ,"div",'class="div_skill_group"')

        + HTMLmanager.insideLabels(this.normalP(this.subtitle(this.lang.linux)) + this.getSkillsLarge(this.getSkillsByType("linux"))
        ,"div",'class="div_skill_group"')

        + HTMLmanager.insideLabels(this.normalP(this.subtitle(this.lang.web)) + this.getSkillsLarge(this.getSkillsByType("web"))
        ,"div",'class="div_skill_group"')

        + HTMLmanager.insideLabels(this.normalP(this.subtitle(this.lang.robotic)) + this.getSkillsLarge(this.getSkillsByType("robotic"))
        ,"div",'class="div_skill_group"')

        + HTMLmanager.insideLabels(this.normalP(this.subtitle(this.lang.edit)) + this.getSkillsLarge(this.getSkillsByType("edit"))
        ,"div",'class="div_skill_group"')
        ,"div",'class="div_skill_groups"')
        ;
    }

    private getSkillsByType(type: string): { name: string; type: string; src: string; startedYear: number; level: number;}[] {
        function skillFilter(type: string, 
            origSkills: { name: string; type: string; src: string; startedYear: number; level: number;}[]): 
            { name: string; type: string; src: string; startedYear: number; level: number;}[] {

            var skills: { name: string; type: string; src: string; startedYear: number; level: number;}[] = [];
            for (var i = 0; i < origSkills.length; i++) {
                if (origSkills[i].type === type) {
                    skills.push(origSkills[i]);
                }
            }
            return skills;
        }
        function skillSort(skills: { name: string; type: string; src: string; startedYear: number; level: number;}[]):
        { name: string; type: string; src: string; startedYear: number; level: number;}[] {
            skills.sort(function (a, b) {
                return b.level - a.level;
            });
            return skills;
        }
        return skillSort(skillFilter(type, this.skills));
    }

    private getSkillsShort(skills: { name: string; type: string; src: string; startedYear: number; level: number;}[]): string {
        var progLangs = "";
        for (var i = 0; i < skills.length; i++) {
            progLangs += this.getSkillImg(skills[i]);
        }
        return HTMLmanager.insideLabels(progLangs, "div", 'class="div_skills_short"');
    }

    private getSkillsLarge(skills: { name: string; type: string; src: string; startedYear: number; level: number; }[]): string {
        function skillLevel(progLang: {name: string; type: string; src: string; startedYear: number; level: number; }) {
            return  HTMLmanager.insideLabels("","div",'style="width:'+progLang.level +'%; height: 100%" class="div_level"');
        }
        var progLangs = "";
        for (var i = 0; i < skills.length; i++) {
            var progLang = this.getSkillImg(skills[i]);
            progLang += HTMLmanager.insideLabels(skillLevel(skills[i]), "div", 'class="div_levelPercentage"');
            //copy skill to skills
            progLangs+=HTMLmanager.insideLabels(progLang, "div", 'class="div_skill"');
        }
        return HTMLmanager.insideLabels(progLangs, "div", 'class="div_skills_large"');
    }

    private getSkillImg(programLang): string {
        return HTMLmanager.createImg(programLang.src, programLang.name, "img_skill");
    }

    private subtitle(text: string): string {
        return HTMLmanager.insideLabels(text, "span", 'class = "subtitle"');
    }

    private normalP(text: string): string {
        return HTMLmanager.insideLabels(text, "p", "");
    }
}

class Competencias_ES extends Competencias {
    constructor(short: boolean) {
        super(short);
    }

    lang: { title: string; lengProg: string; aniosDeExpe: string; goodSkill: string; midSkill: string; 
        basicSkill: string; level: string; DB: string; linux: string; web: string; robotic: string; 
        edit: string; } = {
        title: "Competencias",
        lengProg: "Lenguages de programación",
        aniosDeExpe: "años de experiencia",
        goodSkill: "nivel alto",
        midSkill: "nivel medio",
        basicSkill: "nivel básico",
        level: "nivel",
        DB:"Bases de datos",
        linux: "Distribuciones linux",
        web: "Web",
        robotic: "Robótica / Prototipos",
        edit: "Edición"
    };
}

class Competencias_EN extends Competencias {
    constructor(short: boolean) {
        super(short);
    }

    lang: { title: string; lengProg: string; aniosDeExpe: string; goodSkill: string; midSkill: string; 
        basicSkill: string; level: string; DB: string; linux: string; web: string; robotic: string; 
        edit: string; } = {
        title: "Skills",
        lengProg: "Program languages",
        aniosDeExpe: "years of experience",
        goodSkill: "high level",
        midSkill: "mid level",
        basicSkill: "basic level",
        level: "level",
        DB:"Data bases",
        linux: "Linux distributions",
        web: "Web",
        robotic: "Robotics",
        edit: "Edition"
    };
}