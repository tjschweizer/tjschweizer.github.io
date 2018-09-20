Survey
    .StylesManager
    .applyTheme("default");

var json = {
 title: "Additive Manufacturing Lab\nDepartment of Mechanical Engineering\nIowa State University",
 pages: [
  {
   name: "page1",
   elements: [
    {
     type: "panel",
     name: "Initial Info",
     elements: [
      {
       type: "multipletext",
       name: "Requester Info",
       title: "Requester Information",
       isRequired: true,
       items: [
        {
         name: "First",
         title: "First Name"
        },
        {
         name: "Last",
         title: "Last Name"
        },
        {
         name: "Phone",
         title: "Phone Number"
        },
        {
         name: "Email",
         title: "Email Address"
        }
       ],
       itemSize: 35
      },
      {
       type: "text",
       name: "Project Name",
       visibleIf: "{Requester Info.First} notempty and {Requester Info.Last} notempty and {Requester Info.Phone} notempty and {Requester Info.Email} notempty"
      }
     ],
     title: "Requester Information",
     description: "We require a phone number and email address in the event we have questions or concerns regarding the project, and need to contact you for further information.",
     isRequired: true
    },
    {
     type: "panel",
     name: "Project Information",
     elements: [
      {
       type: "dropdown",
       name: "Business Purpose",
       visibleIf: "{Project Name} notempty",
       title: "Business Purpose",
       isRequired: true,
       choices: [
        "Class - ME",
        "Class - Other",
        "Research - ME",
        "Research - Other",
        "Student Organization",
        "Other"
       ]
      },
      {
       type: "dropdown",
       name: "question6",
       visibleIf: "{Business Purpose} = \"Class - ME\"",
       title: "ME Class",
       choices: [
        {
         value: "item1",
         text: "ME 170"
        },
        {
         value: "item2",
         text: "ME 270"
        },
        {
         value: "item3",
         text: "ME 324"
        },
        {
         value: "item4",
         text: "ME 415"
        },
        {
         value: "item5",
         text: "ME 466"
        }
       ],
       choicesOrder: "asc"
      },
      {
       type: "multipletext",
       name: "Class Information",
       visibleIf: "{Business Purpose} = \"Class - ME\"",
       title: "Class Information",
       items: [
        {
         name: "sectionNum",
         title: "Section Number"
        },
        {
         title: "Group Number"
        },
        {
         name: "text1",
         title: "Instructor Full Name"
        },
        {
         name: "text2",
         title: "Instructor Email"
        }
       ]
      },
      {
       type: "multipletext",
       name: "Class Information1",
       visibleIf: "{Business Purpose} = \"Class - Other\"",
       title: "Class Information",
       items: [
        {
         name: "text1",
         title: "Section Number"
        },
        {
         name: "text2",
         title: "Group Number"
        },
        {
         name: "text3",
         title: "Instructor Full Name"
        },
        {
         name: "text4",
         title: "Instructor Email"
        },
        {
         name: "text5",
         title: "Class Number"
        },
        {
         name: "text6",
         title: "Department"
        }
       ]
      },
      {
       type: "multipletext",
       name: "question7",
       visibleIf: "{Business Purpose} = \"Research - ME\"",
       title: "Research Information",
       items: [
        {
         name: "text1",
         title: "Account Holder/Adviser Full Name"
        },
        {
         name: "text2",
         title: "Adviser Email"
        }
       ]
      },
      {
       type: "multipletext",
       name: "question8",
       visibleIf: "{Business Purpose} = \"Research - Other\"",
       title: "Research Information",
       items: [
        {
         name: "text1",
         title: "Account Holder/Adviser Full Name"
        },
        {
         name: "text2",
         title: "Adviser Email"
        },
        {
         name: "text3",
         title: "Department"
        }
       ]
      },
      {
       type: "multipletext",
       name: "Student Organization Information",
       visibleIf: "{Business Purpose} = \"Student Organization\"",
       items: [
        {
         name: "text1",
         title: "Club Name"
        },
        {
         name: "text2",
         title: "Account Holder/Adviser Full Name"
        },
        {
         name: "text3",
         title: "Adviser Email"
        }
       ]
      },
      {
       type: "comment",
       name: "Project Description",
       visibleIf: "{Business Purpose} = \"Other\"",
       title: "Project Description"
      }
     ],
     title: "Project Information",
     isRequired: true
    },
    {
     type: "panel",
     name: "Print Information",
     elements: [
      {
       type: "html",
       name: "Filament Properties",
       visibleIf: "{Project Name} notempty",
       html: "<style type=\"text/css\">\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}\n.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}\n.tg .tg-baqh{text-align:center;vertical-align:top}\n.tg .tg-amwm{font-weight:bold;text-align:center;vertical-align:top}\n</style>\n<table class=\"tg\">\n  <tr>\n    <th class=\"tg-amwm\">Filament</th>\n    <th class=\"tg-amwm\">Tensile Strength (psi)</th>\n    <th class=\"tg-amwm\">Tensile Modulus (psi)</th>\n    <th class=\"tg-amwm\">Heat Deflection at 66 psi (F)</th>\n    <th class=\"tg-amwm\">Material Price (in^3)</th>\n    <th class=\"tg-amwm\">Support Price (in^3)</th>\n    <th class=\"tg-amwm\">Model Base Price</th>\n  </tr>\n  <tr>\n    <td class=\"tg-baqh\">ABS-P430</td>\n    <td class=\"tg-baqh\">4700</td>\n    <td class=\"tg-baqh\">320,000</td>\n    <td class=\"tg-baqh\">204</td>\n    <td class=\"tg-baqh\">$2.32- $2.42</td>\n    <td class=\"tg-baqh\">$4.46 - 4.67</td>\n    <td class=\"tg-baqh\">$5.21 </td>\n  </tr>\n  <tr>\n    <td class=\"tg-baqh\">ASA</td>\n    <td class=\"tg-baqh\">4200 </td>\n    <td class=\"tg-baqh\">290,000</td>\n    <td class=\"tg-baqh\">208</td>\n    <td class=\"tg-baqh\">$1.90 </td>\n    <td class=\"tg-baqh\">$3.91 </td>\n    <td class=\"tg-baqh\">$6.00 </td>\n  </tr>\n  <tr>\n    <td class=\"tg-baqh\">Polycarbonate</td>\n    <td class=\"tg-baqh\">8300</td>\n    <td class=\"tg-baqh\">282,000</td>\n    <td class=\"tg-baqh\">280</td>\n    <td class=\"tg-baqh\">$2.15 </td>\n    <td class=\"tg-baqh\">$4.89 </td>\n    <td class=\"tg-baqh\">$15.00 </td>\n  </tr>\n  <tr>\n    <td class=\"tg-baqh\">Nylon</td>\n    <td class=\"tg-baqh\">6650</td>\n    <td class=\"tg-baqh\">186,000</td>\n    <td class=\"tg-baqh\">167</td>\n    <td class=\"tg-baqh\">$2.15 </td>\n    <td class=\"tg-baqh\">$4.89 </td>\n    <td class=\"tg-baqh\">$6.00 </td>\n  </tr>\n  <tr>\n    <td class=\"tg-baqh\">ULTEM 1010</td>\n    <td class=\"tg-baqh\">9300</td>\n    <td class=\"tg-baqh\">402,000</td>\n    <td class=\"tg-baqh\">421</td>\n    <td class=\"tg-baqh\">$7.45 </td>\n    <td class=\"tg-baqh\">$7.45 </td>\n    <td class=\"tg-baqh\">$28.60 </td>\n  </tr>\n  <tr>\n    <td class=\"tg-baqh\">ULTEM 9085</td>\n    <td class=\"tg-baqh\">9950</td>\n    <td class=\"tg-baqh\">312,000</td>\n    <td class=\"tg-baqh\">307</td>\n    <td class=\"tg-baqh\">$3.73 </td>\n    <td class=\"tg-baqh\">$3.73 </td>\n    <td class=\"tg-baqh\">$28.60 </td>\n  </tr>\n</table>"
      },
      {
       type: "dropdown",
       name: "Filament ",
       visibleIf: "{Project Name} notempty",
       title: "Filament ",
       choices: [
        "ABS-P430",
        "ASA",
        "Polycarbonate",
        "Nylon",
        "ULTEM 1010",
        "ULTEM 9085"
       ]
      }
     ],
     title: "Print Information"
    },
    {
     type: "comment",
     name: "Rough Dimensions",
     visibleIf: "{Filament } = \"ABS-P430\" or {Filament } = \"ASA\" or {Filament } = \"Polycarbonate\" or {Filament } = \"Nylon\" or {Filament } = \"ULTEM 1010\" or {Filament } = \"ULTEM 9085\""
    },
    {
     type: "file",
     name: "STL Upload",
     visibleIf: "{Filament } = \"ABS-P430\" or {Filament } = \"ASA\" or {Filament } = \"Polycarbonate\" or {Filament } = \"Nylon\" or {Filament } = \"ULTEM 1010\" or {Filament } = \"ULTEM 9085\"",
     title: "File Upload (.igs/.iges/.stp/.step/.sldprt/.stl)",
     storeDataAsText: false,
     maxSize: 0
    }
   ]
  }
 ],
 showQuestionNumbers: "off"
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .innerHTML = "result: " + JSON.stringify(result.data);
    });

$("#surveyElement").Survey({model: survey});
