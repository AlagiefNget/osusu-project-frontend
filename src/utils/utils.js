// import swal from "sweetalert";
// import $ from "jquery";
// import * as cookies from "react-cookies";
// import React from 'react';


// export default class Utils {
//     static awarding_types = [
//         {label: "MoHERST", value: "MoHERST"},
//         {label: "PMO", value: "PMO"},
//         {label: "MoBSE", value: "MoBSE"},
//         {label: "Other", value: "Other"}
//     ];

//     static type = [
//         {label: "Full Scholarship", value: "Full Scholarship"},
//         {label: "Partial Scholarship", value: "Partial Scholarship"}
//     ];

//     static status = [
//         {label: "Active", value: "Active"},
//         {label: "Inactive", value: "Inactive"}
//     ];

//     static admission_types = [
//         {label: "Full Time", value: "Full Time"},
//         {label: "Part Time", value: "Part Time"}
//     ];

//     static lab_status = [
//         {label: "Fully Equipped", value: "Fully Equipped"},
//         {label: "Partially Equipped", value: "Partially Equipped"},
//         {label: "Not in use", value: "Not in use"},
//     ];

//     static countries = [


//         {code: 'AD', label: 'Andorra', phone: '376'},
//         {code: 'AE', label: 'United Arab Emirates', phone: '971'},
//         {code: 'AF', label: 'Afghanistan', phone: '93'},
//         {code: 'AG', label: 'Antigua and Barbuda', phone: '1-268'},
//         {code: 'AI', label: 'Anguilla', phone: '1-264'},
//         {code: 'AL', label: 'Albania', phone: '355'},
//         {code: 'AM', label: 'Armenia', phone: '374'},
//         {code: 'AO', label: 'Angola', phone: '244'},
//         {code: 'AQ', label: 'Antarctica', phone: '672'},
//         {code: 'AR', label: 'Argentina', phone: '54'},
//         {code: 'AS', label: 'American Samoa', phone: '1-684'},
//         {code: 'AT', label: 'Austria', phone: '43'},
//         {code: 'AU', label: 'Australia', phone: '61', suggested: true},
//         {code: 'AW', label: 'Aruba', phone: '297'},
//         {code: 'AX', label: 'Alland Islands', phone: '358'},
//         {code: 'AZ', label: 'Azerbaijan', phone: '994'},
//         {code: 'BA', label: 'Bosnia and Herzegovina', phone: '387'},
//         {code: 'BB', label: 'Barbados', phone: '1-246'},
//         {code: 'BD', label: 'Bangladesh', phone: '880'},
//         {code: 'BE', label: 'Belgium', phone: '32'},
//         {code: 'BF', label: 'Burkina Faso', phone: '226'},
//         {code: 'BG', label: 'Bulgaria', phone: '359'},
//         {code: 'BH', label: 'Bahrain', phone: '973'},
//         {code: 'BI', label: 'Burundi', phone: '257'},
//         {code: 'BJ', label: 'Benin', phone: '229'},
//         {code: 'BL', label: 'Saint Barthelemy', phone: '590'},
//         {code: 'BM', label: 'Bermuda', phone: '1-441'},
//         {code: 'BN', label: 'Brunei Darussalam', phone: '673'},
//         {code: 'BO', label: 'Bolivia', phone: '591'},
//         {code: 'BR', label: 'Brazil', phone: '55'},
//         {code: 'BS', label: 'Bahamas', phone: '1-242'},
//         {code: 'BT', label: 'Bhutan', phone: '975'},
//         {code: 'BV', label: 'Bouvet Island', phone: '47'},
//         {code: 'BW', label: 'Botswana', phone: '267'},
//         {code: 'BY', label: 'Belarus', phone: '375'},
//         {code: 'BZ', label: 'Belize', phone: '501'},
//         {code: 'CA', label: 'Canada', phone: '1', suggested: true},
//         {code: 'CC', label: 'Cocos (Keeling) Islands', phone: '61'},
//         {code: 'CD', label: 'Congo, Democratic Republic of the', phone: '243'},
//         {code: 'CF', label: 'Central African Republic', phone: '236'},
//         {code: 'CG', label: 'Congo, Republic of the', phone: '242'},
//         {code: 'CH', label: 'Switzerland', phone: '41'},
//         {code: 'CI', label: "Cote d'Ivoire", phone: '225'},
//         {code: 'CK', label: 'Cook Islands', phone: '682'},
//         {code: 'CL', label: 'Chile', phone: '56'},
//         {code: 'CM', label: 'Cameroon', phone: '237'},
//         {code: 'CN', label: 'China', phone: '86'},
//         {code: 'CO', label: 'Colombia', phone: '57'},
//         {code: 'CR', label: 'Costa Rica', phone: '506'},
//         {code: 'CU', label: 'Cuba', phone: '53'},
//         {code: 'CV', label: 'Cape Verde', phone: '238'},
//         {code: 'CW', label: 'Curacao', phone: '599'},
//         {code: 'CX', label: 'Christmas Island', phone: '61'},
//         {code: 'CY', label: 'Cyprus', phone: '357'},
//         {code: 'CZ', label: 'Czech Republic', phone: '420'},
//         {code: 'DE', label: 'Germany', phone: '49', suggested: true},
//         {code: 'DJ', label: 'Djibouti', phone: '253'},
//         {code: 'DK', label: 'Denmark', phone: '45'},
//         {code: 'DM', label: 'Dominica', phone: '1-767'},
//         {code: 'DO', label: 'Dominican Republic', phone: '1-809'},
//         {code: 'DZ', label: 'Algeria', phone: '213'},
//         {code: 'EC', label: 'Ecuador', phone: '593'},
//         {code: 'EE', label: 'Estonia', phone: '372'},
//         {code: 'EG', label: 'Egypt', phone: '20'},
//         {code: 'EH', label: 'Western Sahara', phone: '212'},
//         {code: 'ER', label: 'Eritrea', phone: '291'},
//         {code: 'ES', label: 'Spain', phone: '34'},
//         {code: 'ET', label: 'Ethiopia', phone: '251'},
//         {code: 'FI', label: 'Finland', phone: '358'},
//         {code: 'FJ', label: 'Fiji', phone: '679'},
//         {code: 'FK', label: 'Falkland Islands (Malvinas)', phone: '500'},
//         {code: 'FM', label: 'Micronesia, Federated States of', phone: '691'},
//         {code: 'FO', label: 'Faroe Islands', phone: '298'},
//         {code: 'FR', label: 'France', phone: '33', suggested: true},
//         {code: 'GA', label: 'Gabon', phone: '241'},
//         {code: 'GB', label: 'United Kingdom', phone: '44'},
//         {code: 'GD', label: 'Grenada', phone: '1-473'},
//         {code: 'GE', label: 'Georgia', phone: '995'},
//         {code: 'GF', label: 'French Guiana', phone: '594'},
//         {code: 'GG', label: 'Guernsey', phone: '44'},
//         {code: 'GH', label: 'Ghana', phone: '233'},
//         {code: 'GI', label: 'Gibraltar', phone: '350'},
//         {code: 'GL', label: 'Greenland', phone: '299'},
//         {code: 'GM', label: 'Gambia', phone: '220'},
//         {code: 'GN', label: 'Guinea', phone: '224'},
//         {code: 'GP', label: 'Guadeloupe', phone: '590'},
//         {code: 'GQ', label: 'Equatorial Guinea', phone: '240'},
//         {code: 'GR', label: 'Greece', phone: '30'},
//         {code: 'GS', label: 'South Georgia and the South Sandwich Islands', phone: '500'},
//         {code: 'GT', label: 'Guatemala', phone: '502'},
//         {code: 'GU', label: 'Guam', phone: '1-671'},
//         {code: 'GW', label: 'Guinea-Bissau', phone: '245'},
//         {code: 'GY', label: 'Guyana', phone: '592'},
//         {code: 'HK', label: 'Hong Kong', phone: '852'},
//         {code: 'HM', label: 'Heard Island and McDonald Islands', phone: '672'},
//         {code: 'HN', label: 'Honduras', phone: '504'},
//         {code: 'HR', label: 'Croatia', phone: '385'},
//         {code: 'HT', label: 'Haiti', phone: '509'},
//         {code: 'HU', label: 'Hungary', phone: '36'},
//         {code: 'ID', label: 'Indonesia', phone: '62'},
//         {code: 'IE', label: 'Ireland', phone: '353'},
//         {code: 'IL', label: 'Israel', phone: '972'},
//         {code: 'IM', label: 'Isle of Man', phone: '44'},
//         {code: 'IN', label: 'India', phone: '91'},
//         {code: 'IO', label: 'British Indian Ocean Territory', phone: '246'},
//         {code: 'IQ', label: 'Iraq', phone: '964'},
//         {code: 'IR', label: 'Iran, Islamic Republic of', phone: '98'},
//         {code: 'IS', label: 'Iceland', phone: '354'},
//         {code: 'IT', label: 'Italy', phone: '39'},
//         {code: 'JE', label: 'Jersey', phone: '44'},
//         {code: 'JM', label: 'Jamaica', phone: '1-876'},
//         {code: 'JO', label: 'Jordan', phone: '962'},
//         {code: 'JP', label: 'Japan', phone: '81', suggested: true},
//         {code: 'KE', label: 'Kenya', phone: '254'},
//         {code: 'KG', label: 'Kyrgyzstan', phone: '996'},
//         {code: 'KH', label: 'Cambodia', phone: '855'},
//         {code: 'KI', label: 'Kiribati', phone: '686'},
//         {code: 'KM', label: 'Comoros', phone: '269'},
//         {code: 'KN', label: 'Saint Kitts and Nevis', phone: '1-869'},
//         {code: 'KP', label: "Korea, Democratic People's Republic of", phone: '850'},
//         {code: 'KR', label: 'Korea, Republic of', phone: '82'},
//         {code: 'KW', label: 'Kuwait', phone: '965'},
//         {code: 'KY', label: 'Cayman Islands', phone: '1-345'},
//         {code: 'KZ', label: 'Kazakhstan', phone: '7'},
//         {code: 'LA', label: "Lao People's Democratic Republic", phone: '856'},
//         {code: 'LB', label: 'Lebanon', phone: '961'},
//         {code: 'LC', label: 'Saint Lucia', phone: '1-758'},
//         {code: 'LI', label: 'Liechtenstein', phone: '423'},
//         {code: 'LK', label: 'Sri Lanka', phone: '94'},
//         {code: 'LR', label: 'Liberia', phone: '231'},
//         {code: 'LS', label: 'Lesotho', phone: '266'},
//         {code: 'LT', label: 'Lithuania', phone: '370'},
//         {code: 'LU', label: 'Luxembourg', phone: '352'},
//         {code: 'LV', label: 'Latvia', phone: '371'},
//         {code: 'LY', label: 'Libya', phone: '218'},
//         {code: 'MA', label: 'Morocco', phone: '212'},
//         {code: 'MC', label: 'Monaco', phone: '377'},
//         {code: 'MD', label: 'Moldova, Republic of', phone: '373'},
//         {code: 'ME', label: 'Montenegro', phone: '382'},
//         {code: 'MF', label: 'Saint Martin (French part)', phone: '590'},
//         {code: 'MG', label: 'Madagascar', phone: '261'},
//         {code: 'MH', label: 'Marshall Islands', phone: '692'},
//         {code: 'MK', label: 'Macedonia, the Former Yugoslav Republic of', phone: '389'},
//         {code: 'ML', label: 'Mali', phone: '223'},
//         {code: 'MM', label: 'Myanmar', phone: '95'},
//         {code: 'MN', label: 'Mongolia', phone: '976'},
//         {code: 'MO', label: 'Macao', phone: '853'},
//         {code: 'MP', label: 'Northern Mariana Islands', phone: '1-670'},
//         {code: 'MQ', label: 'Martinique', phone: '596'},
//         {code: 'MR', label: 'Mauritania', phone: '222'},
//         {code: 'MS', label: 'Montserrat', phone: '1-664'},
//         {code: 'MT', label: 'Malta', phone: '356'},
//         {code: 'MU', label: 'Mauritius', phone: '230'},
//         {code: 'MV', label: 'Maldives', phone: '960'},
//         {code: 'MW', label: 'Malawi', phone: '265'},
//         {code: 'MX', label: 'Mexico', phone: '52'},
//         {code: 'MY', label: 'Malaysia', phone: '60'},
//         {code: 'MZ', label: 'Mozambique', phone: '258'},
//         {code: 'NA', label: 'Namibia', phone: '264'},
//         {code: 'NC', label: 'New Caledonia', phone: '687'},
//         {code: 'NE', label: 'Niger', phone: '227'},
//         {code: 'NF', label: 'Norfolk Island', phone: '672'},
//         {code: 'NG', label: 'Nigeria', phone: '234'},
//         {code: 'NI', label: 'Nicaragua', phone: '505'},
//         {code: 'NL', label: 'Netherlands', phone: '31'},
//         {code: 'NO', label: 'Norway', phone: '47'},
//         {code: 'NP', label: 'Nepal', phone: '977'},
//         {code: 'NR', label: 'Nauru', phone: '674'},
//         {code: 'NU', label: 'Niue', phone: '683'},
//         {code: 'NZ', label: 'New Zealand', phone: '64'},
//         {code: 'OM', label: 'Oman', phone: '968'},
//         {code: 'PA', label: 'Panama', phone: '507'},
//         {code: 'PE', label: 'Peru', phone: '51'},
//         {code: 'PF', label: 'French Polynesia', phone: '689'},
//         {code: 'PG', label: 'Papua New Guinea', phone: '675'},
//         {code: 'PH', label: 'Philippines', phone: '63'},
//         {code: 'PK', label: 'Pakistan', phone: '92'},
//         {code: 'PL', label: 'Poland', phone: '48'},
//         {code: 'PM', label: 'Saint Pierre and Miquelon', phone: '508'},
//         {code: 'PN', label: 'Pitcairn', phone: '870'},
//         {code: 'PR', label: 'Puerto Rico', phone: '1'},
//         {code: 'PS', label: 'Palestine, State of', phone: '970'},
//         {code: 'PT', label: 'Portugal', phone: '351'},
//         {code: 'PW', label: 'Palau', phone: '680'},
//         {code: 'PY', label: 'Paraguay', phone: '595'},
//         {code: 'QA', label: 'Qatar', phone: '974'},
//         {code: 'RE', label: 'Reunion', phone: '262'},
//         {code: 'RO', label: 'Romania', phone: '40'},
//         {code: 'RS', label: 'Serbia', phone: '381'},
//         {code: 'RU', label: 'Russian Federation', phone: '7'},
//         {code: 'RW', label: 'Rwanda', phone: '250'},
//         {code: 'SA', label: 'Saudi Arabia', phone: '966'},
//         {code: 'SB', label: 'Solomon Islands', phone: '677'},
//         {code: 'SC', label: 'Seychelles', phone: '248'},
//         {code: 'SD', label: 'Sudan', phone: '249'},
//         {code: 'SE', label: 'Sweden', phone: '46'},
//         {code: 'SG', label: 'Singapore', phone: '65'},
//         {code: 'SH', label: 'Saint Helena', phone: '290'},
//         {code: 'SI', label: 'Slovenia', phone: '386'},
//         {code: 'SJ', label: 'Svalbard and Jan Mayen', phone: '47'},
//         {code: 'SK', label: 'Slovakia', phone: '421'},
//         {code: 'SL', label: 'Sierra Leone', phone: '232'},
//         {code: 'SM', label: 'San Marino', phone: '378'},
//         {code: 'SN', label: 'Senegal', phone: '221'},
//         {code: 'SO', label: 'Somalia', phone: '252'},
//         {code: 'SR', label: 'Suriname', phone: '597'},
//         {code: 'SS', label: 'South Sudan', phone: '211'},
//         {code: 'ST', label: 'Sao Tome and Principe', phone: '239'},
//         {code: 'SV', label: 'El Salvador', phone: '503'},
//         {code: 'SX', label: 'Sint Maarten (Dutch part)', phone: '1-721'},
//         {code: 'SY', label: 'Syrian Arab Republic', phone: '963'},
//         {code: 'SZ', label: 'Swaziland', phone: '268'},
//         {code: 'TC', label: 'Turks and Caicos Islands', phone: '1-649'},
//         {code: 'TD', label: 'Chad', phone: '235'},
//         {code: 'TF', label: 'French Southern Territories', phone: '262'},
//         {code: 'TG', label: 'Togo', phone: '228'},
//         {code: 'TH', label: 'Thailand', phone: '66'},
//         {code: 'TJ', label: 'Tajikistan', phone: '992'},
//         {code: 'TK', label: 'Tokelau', phone: '690'},
//         {code: 'TL', label: 'Timor-Leste', phone: '670'},
//         {code: 'TM', label: 'Turkmenistan', phone: '993'},
//         {code: 'TN', label: 'Tunisia', phone: '216'},
//         {code: 'TO', label: 'Tonga', phone: '676'},
//         {code: 'TR', label: 'Turkey', phone: '90'},
//         {code: 'TT', label: 'Trinidad and Tobago', phone: '1-868'},
//         {code: 'TV', label: 'Tuvalu', phone: '688'},
//         {code: 'TW', label: 'Taiwan, Province of China', phone: '886'},
//         {code: 'TZ', label: 'United Republic of Tanzania', phone: '255'},
//         {code: 'UA', label: 'Ukraine', phone: '380'},
//         {code: 'UG', label: 'Uganda', phone: '256'},
//         {code: 'US', label: 'United States', phone: '1', suggested: true},
//         {code: 'UY', label: 'Uruguay', phone: '598'},
//         {code: 'UZ', label: 'Uzbekistan', phone: '998'},
//         {code: 'VA', label: 'Holy See (Vatican City State)', phone: '379'},
//         {code: 'VC', label: 'Saint Vincent and the Grenadines', phone: '1-784'},
//         {code: 'VE', label: 'Venezuela', phone: '58'},
//         {code: 'VG', label: 'British Virgin Islands', phone: '1-284'},
//         {code: 'VI', label: 'US Virgin Islands', phone: '1-340'},
//         {code: 'VN', label: 'Vietnam', phone: '84'},
//         {code: 'VU', label: 'Vanuatu', phone: '678'},
//         {code: 'WF', label: 'Wallis and Futuna', phone: '681'},
//         {code: 'WS', label: 'Samoa', phone: '685'},
//         {code: 'XK', label: 'Kosovo', phone: '383'},
//         {code: 'YE', label: 'Yemen', phone: '967'},
//         {code: 'YT', label: 'Mayotte', phone: '262'},
//         {code: 'ZA', label: 'South Africa', phone: '27'},
//         {code: 'ZM', label: 'Zambia', phone: '260'},
//         {code: 'ZW', label: 'Zimbabwe', phone: '263'},
//     ];


//     static genders = [
//         {label: "Female", value: "Female"},
//         {label: "Male", value: "Male"}
//     ];

//     static GlobalState = null;


//     static ethnics = [
//         {label: "Aku", value: "Aku"},
//         {label: "Fula", value: "Fula"},
//         {label: "Jola", value: "Jola"},
//         {label: "Mandinka", value: "Mandinka"},
//         {label: "Manjago", value: "Manjago"},
//         {label: "Serer", value: "Serer"},
//         {label: "Wollof", value: "Wollof"},
//         {label: "Other", value: "Other"},
//     ];

//     static awards = [
//         {label: "Bachelor", value: "Bachelor"},
//         {label: "Certificate", value: "Certificate"},
//         {label: "Higher Diploma", value: "Higher Diploma"},
//         {label: "Ordinary Diploma", value: "Ordinary Diploma"},
//         {label: "Masters", value: "Masters"},
//         {label: "Doctorate", value: "Doctorate"},
//         {label: "GSQ Certificate Level 1", value: "GSQ Certificate Level 1"},
//         {label: "GSQ Certificate Level 2", value: "GSQ Certificate Level 2"},
//         {label: "GSQ Certificate Level 3", value: "GSQ Certificate Level 3"},
//         {label: "GSQ Certificate Level 4", value: "GSQ Certificate Level 4"},
//         {label: "Post Graduate Certificate", value: "Post Graduate Certificate"},
//         {label: "Post Graduate Diploma", value: "Post Graduate Diploma"},
//     ];

//     static sets = [
//         {label: "Set 1", value: "Set 1"},
//         {label: "Set 2", value: "Set 2"},
//     ];

//     static lga = [
//         {label: "Banjul", value: "Banjul"},
//         {label: "KMC", value: "KMC"},
//         {label: "WCR", value: "WCR"},
//         {label: "LRR", value: "LRR"},
//         {label: "NBR", value: "NBR"},
//         {label: "CRR", value: "CRR"},
//         {label: "URR", value: "URR"}
//     ];

//     static sector = [
//         {label: "Public", value: "Public"},
//         {label: "Private", value: "Private"}
//     ];

//     static financial_source = [
//         {label: "Public", value: "public"},
//         {label: "Private", value: "private"},
//         {label: "Subvented", value: "subvented"}
//     ];

//     static placements = [
//         {label: "All", value: "All"},
//         {label: "National", value: "National"},
//         {label: "International", value: "International"},
//     ];

//     static currencies = [
//         {value: 'GMD', label: 'GMD'},
//         {value: 'USD', label: '$'},
//         {value: 'EUR', label: '€'},
//         {value: 'BTC', label: '฿'},
//         {value: 'JPY', label: '¥'}
//     ];

//     static regions = [
//         {value: 'Region 1', label: 'Region 1'},
//         {value: 'Region 2', label: 'Region 2'},
//         {value: 'Region 3', label: 'Region 3'},
//         {value: 'Region 4', label: 'Region 4'},
//         {value: 'Region 5', label: 'Region 5'}
//     ];

//     static classifications = [
//         {value: 'Higher Education', label: 'Higher Education'},
//         {value: 'Tertiary', label: 'Tertiary'},
//         {value: 'Non Tertiary', label: 'Non Tertiary'}

//     ];

//     static accreditation = [
//         {value: 'Accredited', label: 'Accredited'},
//         {value: 'Not Accredited', label: 'Not Accredited'},
//     ];

//     static program_types = [
//         {value: 'General', label: 'General'},
//         {value: 'TVET', label: 'TVET'},
//     ];

//     static charge_types = [
//         {label: 'Tuition', value: 'Tuition'},
//         {label: 'Student Union', value: 'Student Union'},
//         {label: 'Exams', value: 'Exams'},
//         {label: 'External Exams', value: 'External Exams'},
//         {label: 'Document', value: 'Document'},
//         {label: 'Other', value: 'Other'}
//     ];

//     static requirements = [
//         {label: "PRE ENTRY", value: "PRE ENTRY"},
//         {label: "WASSCE", value: "WASSCE"},
//         {label: "BSc LAW", value: "BSc LAW"},
//         {label: "BSc Arts & Sciences", value: "BSc Arts & Sciences"},
//         {label: "BSc Medicine & Allied Health Sciences", value: "BSc Medicine & Allied Health Sciences"},
//         {label: "BSc Education", value: "BSc Education"},
//         {label: "BSc Information & Communication Technology", value: "BSc Information & Communication Technology"},
//         {label: "BSc Business & Public Administration", value: "BSc Business & Public Administration"},
//         {label: "BSc Journalism & Digital Media", value: "BSc Journalism & Digital Media"},
//         {label: "BSc Engineering & Architecture", value: "BSc Engineering & Architecture"},
//         {label: "Other", value: "Other"},
//     ];

//     static isced_levels = [
//         {label: 0, value: 0},
//         {label: 1, value: 1},
//         {label: 2, value: 2},
//         {label: 3, value: 3},
//         {label: 4, value: 4},
//         {label: 5, value: 5},
//         {label: 6, value: 6},
//         {label: 7, value: 7},
//         {label: 8, value: 8}
//     ];

//     static durations = [
//         {label: 3, value: 3},
//         {label: 6, value: 6},
//         {label: 12, value: 12},
//         {label: 18, value: 18},
//         {label: 24, value: 24},
//         {label: 36, value: 36},
//         {label: 48, value: 48},
//         {label: 72, value: 72},
//         {label: 84, value: 84},
//     ];

//     static roles = [
//         {label: "Academic", value: "Academic"},
//         {label: "Administrative", value: "Administrative"},
//         {label: "Both", value: "Both"},
//         {label: "Other", value: "Other"}
//     ];

//     static emp_types = [
//         {label: "Full Time", value: "Full Time"},
//         {label: "Part Time", value: "Part Time"},
//         {label: "Temporary", value: "Temporary"},
//         {label: "Permanent", value: "Permanent"}
//     ];


//     static ranks = [
//         {label: "Lecturer", value: "Lecturer"},
//         {label: "Administrator", value: "Administrator"},
//         {label: "Professor", value: "Professor"},
//         {label: "Dean", value: "Dean"},
//         {label: "Senior Lecturer", value: "Senior Lecturer"},
//         {label: "Assistant Lecturer", value: "Assistant Lecturer"},
//         {label: "Assistant Professor", value: "Assistant Professor"},
//         {label: "Associate Professor", value: "Associate Professor"},
//         {label: "Teaching Assistant", value: "Teaching Assistant"},
//         {label: "Senior Lecturer", value: "Senior Lecturer"},
//         {label: "Adjunct", value: "Adjunct"},
//         {label: "Visiting Scholar", value: "Visiting Scholar"},
//         {label: "CAO", value: "CAO"},
//         {label: "Director", value: "Director"},
//         {label: "Admin Assistant", value: "Admin Assistant"},
//         {label: "Admission Officer", value: "Admission Officer"},
//         {label: "Communications Officer", value: "Communications Officer"},
//         {label: "Executive Secretary", value: "Executive Secretary"},
//         {label: "Financial Assistant", value: "Financial Assistant"},
//         {label: "Video Cordinator", value: "Video Cordinator"},
//         {label: "Receptionist", value: "Receptionist"},
//         {label: "Registrar", value: "Registrar"},
//         {label: "Provost", value: "Provost"},
//         {label: "Deputy Provost", value: "Deputy Provost"},
//         {label: "Academic Affairs", value: "Academic Affairs"},
//     ];

//     static qualifications = [
//         {label: "Masters", value: "Masters"},
//         {label: "Doctorate", value: "Doctorate"},
//         {label: "Bachelors", value: "Bachelors"},
//         {label: "MCSA", value: "MCSA"},
//         {label: "Diploma Lecturer", value: "Diploma Lecturer"},
//         {label: "Ordinary Diploma", value: "Ordinary Diploma"},
//         {label: "Higher Diploma", value: "Higher Diploma"},
//         {label: "WASSCE", value: "WASSCE"},
//     ];


//     static validateEmail(email) {
//         if (email === null || email === undefined || email.lenth == 0)
//             return false;

//         var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return re.test(String(email).toLowerCase());
//     };

//     static validatePhoneNumber(input) {
//         var phoneNumber = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s]*[0-9]*$/;
//         if (input.match(phoneNumber)) {
//             return true;
//         } else {
//             return false;
//         }
//     };

//     static hasNumber = (myString) => {
//         return /\d/.test(myString);
//     };

//     static validateName(text) {
//         let reg = /^[A-zÀ-ú._]+(?:[\s'-][A-zÀ-ú._]+)*$/;
//         return reg.test(text.trim());
//     };

//     static validateText(text) {
//         let reg = /^(?!\s)(?!.*\s$)(?=.*[a-zA-ZÀ-ú0-9._&])[a-zA-ZÀ-ú0-9._& '~?!\-]+$/
//         return reg.test(text.trim());
//     };

//     static getToday = () => {

//         let date = new Date();
//         let dd = date.getDate();
//         let mm = date.getMonth() + 1;
//         let yyyy = date.getFullYear();

//         if (dd < 10) {
//             dd = '0' + dd;
//         }
//         if (mm < 10) {
//             mm = '0' + mm;
//         }
//         return yyyy + "-" + mm + "-" + dd;
//     };
//     static getDecade = () => {

//         let date = new Date();
//         let dd = date.getDate();
//         let mm = date.getMonth() + 1;
//         let yyyy = date.getFullYear()-10;

//         if (dd < 10) {
//             dd = '0' + dd;
//         }
//         if (mm < 10) {
//             mm = '0' + mm;
//         }
//         return yyyy + "-" + mm + "-" + dd;
//     };

//     static displayMessage = (icon, title, text, time=null) => {
//         return swal({
//             title: title,
//             text: text,
//             icon: icon,
//             timer: time ? time : 3000,
//             buttons: false
//         });
//     };

//     static confirmDeleteMessage = (text, title=null) => {
//         return swal({
//             title: (title) ? title : "Are you sure?",
//             text: text,
//             icon: "warning",
//             buttons: true,
//             dangerMode: true,
//         })
//     };

//     static formatDate = (date) => {
//         let dates=date+'';
//         let _date = dates.split('/');
//         let temp = _date[2];
//         _date[2] = _date[0];
//         _date[0] = temp;
//         return _date.join('');
//     };

//     static isValid = (val) => {
//         return (isNaN(+(val)));
//     };

//     static getFilterComparator = (opsymbole) => {
//         var x = null;
//         switch (opsymbole) {
//             case '=':
//                 x = ' => ';
//             case '>':
//                 x = '.gt => ';
//             case '<':
//                 x = '.lt => ';
//             case '<=':
//                 x = '.lte => ';
//             case '>=':
//                 x = '.gte => ';
//             default:
//                 x = ' => '
//         }
//         return x;
//     };

//     static compileQuery(query, url, attrs, defaultOrder, model, defaultData, defaultFilter, searchModels, filterModels, grouping) {

//         let data = defaultData || {};

//         data.attrs = attrs;
//         data.page = query.page + 1;
//         data.size = query.pageSize;
//         data.new_format = true;
//         data.model = model;

//         if (query.orderBy) {
//             data.order = [{"attr": query.orderBy.field, "by": query.orderDirection}];
//         } else {
//             data.order = defaultOrder;
//         }

//         if (query.search) {
//             data.search = query.search;
//         }

//         if (grouping) {
//             data.group = grouping
//         }

//         let f = [];
//         if (defaultFilter) {
//             f.push(defaultFilter);
//         }
//         if (searchModels)
//             data.searchModels = searchModels;
//         if (query.filters) {
//             query.filters.forEach((item) => {
//                 f.push(":" + item.column.field + Utils.getFilterComparator(item.column.tableData.operator) + '\'' + item.column.tableData.filterValue + '*\'')
//             });
//             data.query = '{' + f.join(',') + '}';
//         }
//         if (filterModels) {

//         }
//         url += '?' + $.param(data);
//         return url;
//     };

//     static getReturnUrl = (url, fromUrl = null) => {
//         if (fromUrl !== null) {
//             return fromUrl;
//         } else {
//             let tab = url.split('/');
//             let _t = [];
//             _t.push(tab[0]);
//             _t.push(tab[1]);
//             _t.push(tab[2]);
//             return _t.join('/');
//         }
//     };

//     static getFullName = (person) => `${person.first_name} ${person.middle_name} ${person.last_name}`;

//     static dateFormat = (n) => {
//         if (!n)
//             return '';
//         if (n === 'none')
//             return n;
//         //Used for date display
//         var opts = {};
//         opts.day = "numeric";
//         // opts.weekday = "long";
//         opts.year = "numeric";
//         opts.month = "numeric";
//         var lang = navigator.language || navigator.userLanguage;

//         n = n.slice(0, 10);
//         let _tmp = n.split('-');

//         let dd = _tmp[2];
//         let mm = _tmp[1] ;
//         let yyyy = _tmp[0];
//         //var event = new Date(Date.UTC(dd, mm,yyyy ));

//         return dd+'-'+mm+'-'+yyyy;
//     };

//     static yearFormat = (n) => {
//         if (!n)
//             return '';
//         if (n === 'none')
//             return n;
//         //Used for date display
//         var opts = {};
//         opts.day = "numeric";
//         // opts.weekday = "long";
//         opts.year = "numeric";
//         opts.month = "numeric";
//         var lang = navigator.language || navigator.userLanguage;

//         n = n.slice(0, 10);
//         let _tmp = n.split('-');

//         let dd = _tmp[2];
//         let mm = _tmp[1] ;
//         let yyyy = _tmp[0];
//         //var event = new Date(Date.UTC(dd, mm,yyyy ));

//         return yyyy;
//     };

//     static goBack = (_this) => {
//         _this.props.history.goBack();
//     };

//     static validateFloat = (float_value) => {
//         let _regex = /^\d+(\.\d{1,2})?$/;

//         return _regex.test(float_value);
//     };

//     static onLoadFrame(self, params) {
//         let pages = [];
//         let pageList = [];
//         let currentPage = null;

//         var x = $('#reportFrame').contents().find('br').hide();
//         var x = $('#reportFrame').contents().find('.jrPage');
//         let domPages = $('#reportFrame').contents().find('.jrPage');
//         if (domPages.length > 0) {
//             domPages.each(function (idx) {
//                 pages[idx] = $(this);
//                 pageList[idx] = 'page ' + (idx + 1);
//                 if (idx > 0) {
//                     $(this).hide();
//                 } else {
//                     currentPage = $(this);
//                 }
//             });
//             let xy = $('#reportFrame').contents().find('body');
//             $('#reportFrame')[0].style.height = '' + $('#reportFrame').contents().find('body').scrollHeight + 'px';
//         } else {
//             currentPage = true;
//         }
//         let domImages = $('#reportFrame').contents().find('img');
//         domImages.each(function (idx) {

//             let img = $(this);
//             if (img) {
//                 var src = img[0].src;
//                 img[0].src = src.replace(/http[s]?:\/\/[\w.:\d]+/g, "http://api.lecket.gm") + "?profile_id=" + cookies.load('profileId');
//             }


//         });
//         self.setState({pageList: pageList, pages: pages, currentPage: currentPage});
//     };

//     static setGlobal(self) {
//         this.GlobalState = self;
//     };

//     static loadReport(baseUrl, parts, params) {
//         $.ajax({
//             method: "GET",
//             url: Utils.getReportUrl(baseUrl, parts) + '&format=text/html',
//             type: 'HTML',
//             headers: {
//                 "Authorization": "token " + cookies.load("token"),
//                 "UserProfile": cookies.load("profile"),
//                 "UserKey": cookies.load('User-Key')
//             }, success: function (data) {

//                 $('#reportFrame').contents().find('html').html(data);
//                 setTimeout(function () {
//                     Utils.onLoadFrame(Utils.GlobalState, params);
//                 }, 1000)

//             }.bind(Utils.GlobalState),
//             error: function (error) {
//                 alert(error.responseText);
//             }
//         });
//     };

//     static showReportUtility(name, baseUrl, parts, cookies, params) {
//         Utils.GlobalState.setState({report: {view: true, name: name, baseUrl: baseUrl, parts: parts, params: params}});
//         this.loadReport(baseUrl, parts, params)
//     };

//     static getReportUrl(baseUrl, parts) {
//         return baseUrl + '&params=' + escape(JSON.stringify(parts.params)) + parts.sub + "&injects=" + JSON.stringify(parts.inject);
//     }


// }
