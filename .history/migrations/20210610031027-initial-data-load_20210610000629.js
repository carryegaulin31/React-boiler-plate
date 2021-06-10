module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('nsn_flis_parts', [
      { id: 2, NIIN: 42, PART_NUMBER: 'UK 60A890216', UNPUNCTUATED: 'UK60A890216', '24039', '3', '2', '6', '9Z', 'A', '', '', FSC: 8940, PUBLICATION_DATE: 'AUG 2013' },
{ id: 3, NIIN: 45, PART_NUMBER: 'UK 60A890D255', UNPUNCTUATED: 'UK60A890D255', '24039', '3', '9', '5', '9Z', 'A', '', '', FSC: 5940, PUBLICATION_DATE: 'AUG 2013' },
{ id: 4, NIIN: 45, PART_NUMBER: 'JWROGJWOEGIOW', UNPUNCTUATED: 'JWROGJWOEGIOW', '0CEN3', '5', '2', '5', 'ZZ', 'A', '', '', FSC: 5940, PUBLICATION_DATE: 'AUG 2013' },
{ id: 5, NIIN: 47, PART_NUMBER: 'M30294', UNPUNCTUATED: 'M30294', '8V613', '3', '2', '2', 'ZZ', 'A', '', '', FSC: 1560, PUBLICATION_DATE: 'AUG 2013' },
{ id: 6, NIIN: 47, PART_NUMBER: 'M30294', UNPUNCTUATED: 'M30294', '02731', '5', '9', '2', 'CT', 'A', '', '', FSC: 1560, PUBLICATION_DATE: 'AUG 2013' },
{ id: 7, NIIN: 48, PART_NUMBER: '2-001-020-14', UNPUNCTUATED: '200102014', '99193', '3', '2', '2', 'CT', 'A', '', '', FSC: 2840, PUBLICATION_DATE: 'AUG 2013' },
{ id: 8, NIIN: 48, PART_NUMBER: 'T-55-L-11D', UNPUNCTUATED: 'T55L11D', '99193', '5', '2', '2', 'CT', 'A', '', '', FSC: 2840, PUBLICATION_DATE: 'AUG 2013' },
{ id: 9, NIIN: 49, PART_NUMBER: '2-200-070-67', UNPUNCTUATED: '220007067', '99193', '3', '2', '2', 'CT', 'A', '', '', FSC: 2840, PUBLICATION_DATE: 'AUG 2013' },
{ id: 10, NIIN 49, PART_NUMBER: '10106420', UNPUNCTUATED: '10106420', 'A486G', '6', '9', '9', 'WF', 'A', '', '', FSC: 2840, PUBLICATION_DATE: 'AUG 2013' },
{ id: 11, NIIN 50, PART_NUMBER: 'TGR5-2M-3', UNPUNCTUATED: 'TGR52M3', '11568', '3', '9', '2', 'SB', 'A', '', '', FSC: 4310, PUBLICATION_DATE: 'AUG 2013' },
{ id: 12, NIIN 51, PART_NUMBER: '10667829', UNPUNCTUATED: '10667829', '30267', 'C', '1', '5', 'TX', 'A', '', 'AF', FSC: 5960, PUBLICATION_DATE: 'AUG 2013' },
{ id: 13, NIIN 51, PART_NUMBER: 'TK140', UNPUNCTUATED: 'TK140', '30267', 'C', '1', '5', 'TX', 'A', '', 'AF', FSC: 5960, PUBLICATION_DATE: 'AUG 2013' },
{ id: 14, NIIN 51, PART_NUMBER: '10667986', UNPUNCTUATED: '10667986', '18876', '1', '2', '1', 'BD', 'A', '', '', FSC: 5960, PUBLICATION_DATE: 'AUG 2013' },
{ id: 15, NIIN 51, PART_NUMBER: '10667829', UNPUNCTUATED: '10667829', '18876', 'C', '1', '5', 'TX', 'A', '', 'AF', FSC: 5960, PUBLICATION_DATE: 'AUG 2013' },
{ id: 16, NIIN 51, PART_NUMBER: 'TH2232A', UNPUNCTUATED: 'TH2232A', '18778', '3', '2', '5', 'TX', 'A', '', '', FSC: 5960, PUBLICATION_DATE: 'AUG 2013' },
{ id: 17, NIIN 51, PART_NUMBER: 'QKK1826', UNPUNCTUATED: 'QKK1826', '3B150', '3', '2', '6', 'BD', 'A', '', '', FSC: 5960, PUBLICATION_DATE: 'AUG 2013' },
{ id: 18, NIIN 51, PART_NUMBER: 'QKK1826', UNPUNCTUATED: 'QKK1826', '49956', '5', '9', '6', 'BD', 'A', '', '', FSC: 5960, PUBLICATION_DATE: 'AUG 2013' },
{ id: 19, NIIN 57, PART_NUMBER: 'A156.4 TYPE C02012 SIZE 2', UNPUNCTUATED: 'A1564TYPEC02012SIZE2', '81348', '2', '2', '4', 'ZZ', 'A', '', '', FSC: 5340, PUBLICATION_DATE: 'AUG 2013' },
{ id: 20, NIIN 57, PART_NUMBER: 'FF-H-121', UNPUNCTUATED: 'FFH121', '81348', '5', '1', '4', 'HD', 'A', '', '', FSC: 5340, PUBLICATION_DATE: 'AUG 2013' },
{ id: 21, NIIN 57, PART_NUMBER: 'A156.4 TYPE C02012 SIZE 2', UNPUNCTUATED: 'A1564TYPEC02012SIZE2', '80204', '5', '1', '4', 'KZ', 'A', '', '', FSC: 5340, PUBLICATION_DATE: 'AUG 2013' },
{ id: 22, NIIN 58, PART_NUMBER: 'A156.4 TYPE C02 012 SIZE 3', UNPUNCTUATED: 'A1564TYPEC02012SIZE3', 'D9182', 'C', '1', '6', 'ZZ', 'A', '', 'AC', FSC: 5340, PUBLICATION_DATE: 'AUG 2013' },
{ id: 23, NIIN 58, PART_NUMBER: 'ANSI A156-4 TYP E C02012 SIZE3', UNPUNCTUATED: 'ANSIA1564TYPEC02012SIZE3', 'D9182', 'C', '1', '6', 'ZZ', 'A', '', 'AC', FSC: 5340, PUBLICATION_DATE: 'AUG 2013' },
{ id: 24, NIIN 58, PART_NUMBER: 'FF-H-121', UNPUNCTUATED: 'FFH121', '81348', '5', '1', '4', 'HD', 'A', '', '', FSC: 5340, PUBLICATION_DATE: 'AUG 2013' },
{ id: 25, NIIN 58, PART_NUMBER: 'A156-4 TYPE C02012 SIZE 3', UNPUNCTUATED: 'A1564TYPEC02012SIZE3', '80204', '3', '2', '4', 'KZ', 'A', '', '', FSC: 5340, PUBLICATION_DATE: 'AUG 2013' },
{ id: 26, NIIN 59, PART_NUMBER: 'A156.4 TYPE C02012 SIZE 4', UNPUNCTUATED: 'A1564TYPEC02012SIZE4', '80204', '3', '1', '4', 'KZ', 'A', '', '', FSC: 5340, PUBLICATION_DATE: 'AUG 2013' },
{ id: 27, NIIN 59, PART_NUMBER: 'FF-H-121', UNPUNCTUATED: 'FFH121', '81348', '5', '9', '4', 'HD', 'A', '', '', FSC: 5340, PUBLICATION_DATE: 'AUG 2013' },
{ id: 28, NIIN 59, PART_NUMBER: 'A-A-1926', UNPUNCTUATED: 'AA1926', '58536', '5', '9', 'E', 'ZZ', 'A', '', '', FSC: 5340, PUBLICATION_DATE: 'AUG 2013' },
{ id: 29, NIIN 60, PART_NUMBER: 'A156.4 TYPE C02012 SIZE 5', UNPUNCTUATED: 'A1564TYPEC02012SIZE5', '81348', '2', '2', '4', 'ZZ', 'A', '', '', FSC: 5340, PUBLICATION_DATE: 'AUG 2013' },
{ id: 30, NIIN 60, PART_NUMBER: 'FF-H-121', UNPUNCTUATED: 'FFH121', '81348', '5', '1', '4', 'HD', 'A', '', '', FSC: 5340, PUBLICATION_DATE: 'AUG 2013' },
{ id: 31, NIIN 60, PART_NUMBER: 'A156.4 TYPE C02012 SIZE 5', UNPUNCTUATED: 'A1564TYPEC02012SIZE5', '80204', '5', '1', '4', 'KZ', 'A', '', '', FSC: 5340, PUBLICATION_DATE: 'AUG 2013' },
{ id: 32, NIIN 60, PART_NUMBER: 'A156.4 TYPE CO1012 SIZE 5', UNPUNCTUATED: 'A1564TYPECO1012SIZE5', '80204', 'E', '8', '4', 'KZ', 'A', '', '', FSC: 5340, PUBLICATION_DATE: 'AUG 2013' },
{ id: 33, NIIN 60, PART_NUMBER: 'FF-H-121', UNPUNCTUATED: 'FFH121', '81349', 'E', '8', '4', 'KZ', 'A', '', '', FSC: 5340, PUBLICATION_DATE: 'AUG 2013' },
{ id: 34, NIIN 61, PART_NUMBER: '12003100', UNPUNCTUATED: '12003100', '19204', '3', '2', '1', 'BF', 'A', '', '', FSC: 1005, PUBLICATION_DATE: 'AUG 2013' },
{ id: 35, NIIN 64, PART_NUMBER: '14790', UNPUNCTUATED: '14790', '1PSG1', '3', '2', '4', 'ZZ', 'A', '', '', FSC: 6520, PUBLICATION_DATE: 'AUG 2013' },
{ id: 36, NIIN 64, PART_NUMBER: '14790', UNPUNCTUATED: '14790', '72574', '3', '9', '4', 'KX', 'A', '', '', FSC: 6520, PUBLICATION_DATE: 'AUG 2013' },
{ id: 37, NIIN 65, PART_NUMBER: '11028234-3', UNPUNCTUATED: '110282343', '18876', '3', '2', '1', 'BD', 'A', '', '', FSC: 8140, PUBLICATION_DATE: 'AUG 2013' },
{ id: 38, NIIN 67, PART_NUMBER: 'MIL-C-29127',  UNPUNCTUATED:'MILC29127', '81349', '4', '1', '4', 'CY', 'A', '', '', FSC: 8305, PUBLICATION_DATE: 'AUG 2013' },
{ id: 39, NIIN 68, PART_NUMBER: '3323578', UNPUNCTUATED: '3323578', '82577', '3', '2', '1', 'BD', 'A', '', '', FSC: 5340, PUBLICATION_DATE: 'AUG 2013' },
{ id: 40, NIIN 68, PART_NUMBER: '3323578', UNPUNCTUATED: '3323578', '20723', '5', '1', '6', 'BD', 'A', '', '', FSC: 5340, PUBLICATION_DATE: 'AUG 2013' },
{ id: 41, NIIN 69, PART_NUMBER: 'SURGISTAT II SYSTEM', UNPUNCTUATED: 'SURGISTATIISYSTEM', '52385', '5', '1', '4', 'ZZ', 'A', '', '', FSC: 6515, PUBLICATION_DATE: 'AUG 2013' },
{ id: 42, NIIN 69, PART_NUMBER: 'SURGISTAT II WITH ACCESSORIES', UNPUNCTUATED: 'SURGISTATIIWITHACCESSORIES', '4YQT2', '3', '2', '4', 'ZZ', 'A', '', '', FSC: 6515, PUBLICATION_DATE: 'AUG 2013' },
{ id: 43, NIIN 69, PART_NUMBER: 'SURGISTAT', UNPUNCTUATED: 'SURGISTAT', '52385', '5', '9', '4', 'KX', 'A', '', '', FSC: 6515, PUBLICATION_DATE: 'AUG 2013' },
{ id: 44, NIIN 69, PART_NUMBER: 'SURGII20 SURGISTAT II GENERATOR', UNPUNCTUATED: 'SURGII20SURGISTATIIGENERATOR', '52385', '5', '9', '4', 'ZZ', 'A', '', '', FSC: 6515, PUBLICATION_DATE: 'AUG 2013' },
{ id: 45, NIIN 69, PART_NUMBER: 'SURGISTAT II AND ACCESSORIES', UNPUNCTUATED: 'SURGISTATIIANDACCESSORIES', '52385', '5', '9', '4', 'ZZ', 'A', '', '', FSC: 6515, PUBLICATION_DATE: 'AUG 2013' },
{ id: 46, NIIN 69, PART_NUMBER: 'C16789', UNPUNCTUATED: 'C16789', '52385', '5', '9', '4', 'ZZ', 'A', '', '', FSC: 6515, PUBLICATION_DATE: 'AUG 2013' },
{ id: 47, NIIN 70, PART_NUMBER: 'M0-007', UNPUNCTUATED: 'M0007', '89875', '5', '1', '4', 'ZZ', 'A', '', '', FSC: 6530, PUBLICATION_DATE: 'AUG 2013' },
{ id: 48, NIIN 70, PART_NUMBER: 'B2719-5', UNPUNCTUATED: 'B27195', '07TA6', '3', '2', '5', 'ZZ', 'A', '', '', FSC: 6530, PUBLICATION_DATE: 'AUG 2013' },
{ id: 49, NIIN 70, PART_NUMBER: '4695', UNPUNCTUATED: '4695', '23271', '3', '2', '4', 'KX', 'A', '', '', FSC: 6530, PUBLICATION_DATE: 'AUG 2013' },
{ id: 50, NIIN 70, PART_NUMBER: 'D80000', UNPUNCTUATED: 'D80000', '0PMN3', 'E', '8', '4', '54', 'A', '', '', FSC: 6530, PUBLICATION_DATE: 'AUG 2013' },
{ id: 51, NIIN 70, PART_NUMBER: 'B2719-5', UNPUNCTUATED: 'B27195', '22353', '5', '9', '4', 'ZZ', 'A', '', '', FSC: 6530, PUBLICATION_DATE: 'AUG 2013' },
{ id: 52, NIIN 71, PART_NUMBER: '22053', '22053', UNPUNCTUATED: '29685', '3', '9', '4', 'ZZ', 'A', '', '', FSC: 6520, PUBLICATION_DATE: 'AUG 2013' },
{ id: 53, NIIN 75, PART_NUMBER: '1062-7000', UNPUNCTUATED: '10627000', '72582', '3', '2', '4', 'CT', 'A', '', '', FSC: 2815, PUBLICATION_DATE: 'AUG 2013' },
{ id: 54, NIIN 77, PART_NUMBER: '4G19063-105A', UNPUNCTUATED: '4G19063105A', '98897', '3', '2', '2', 'SB', 'A', '', '', FSC: 5310, PUBLICATION_DATE: 'AUG 2013' },
{ id: 55, NIIN 79, PART_NUMBER: '10910174-33', UNPUNCTUATED: '1091017433', '19200', '3', '2', '1', 'AZ', 'A', '', '', FSC: 5310, PUBLICATION_DATE: 'AUG 2013' },
{ id: 56, NIIN 79, PART_NUMBER: '10910174-33', UNPUNCTUATED: '1091017433', 'T0720', '8', '2', '1', 'ZW', 'A', '', '', FSC: 5310, PUBLICATION_DATE: 'AUG 2013' },
{ id: 57, NIIN 79, PART_NUMBER: '10910174-33', UNPUNCTUATED: '1091017433', '19204', '5', '9', '1', 'AZ', 'A', '', '', FSC: 5310, PUBLICATION_DATE: 'AUG 2013' },
{ id: 58, NIIN 79, PART_NUMBER: '10910174-33', UNPUNCTUATED: '1091017433', '19207', '5', '9', '5', 'AZ', 'A', '', '', FSC: 5310, PUBLICATION_DATE: 'AUG 2013' },
{ id: 59, NIIN 79, PART_NUMBER: '5310000000079', UNPUNCTUATED: '5310000000079', 'SCY13', '5', '9', '9', 'YP', 'A', '', '', FSC: 5310, PUBLICATION_DATE: 'AUG 2013' },
{ id: 60, NIIN 80, PART_NUMBER: 'M52471/2B002152', UNPUNCTUATED: 'M524712B002152', '81349', '2', '2', 'E', 'AX', 'A', '', '', FSC: 4720, PUBLICATION_DATE: 'AUG 2013' },
{ id: 61, NIIN 80, PART_NUMBER: 'MIL-DTL-52471/2', 'MILDTL524712', '81349', '4', '1', 'E', 'ZZ', 'A', '', '', FSC: 4720, PUBLICATION_DATE: 'AUG 2013' },
{ id: 62, NIIN 80, PART_NUMBER: '25-2762-2', UNPUNCTUATED: '2527622', '5S241', '5', '1', 'A', 'AX', 'A', '', '', FSC: 4720, PUBLICATION_DATE: 'AUG 2013' },
{ id: 63, NIIN 81, PART_NUMBER: 'L60548', UNPUNCTUATED: 'L60548', '10988', '3', '2', '5', 'PA', 'A', '', '', FSC: 4720, PUBLICATION_DATE: 'AUG 2013' },
{ id: 64, NIIN 82, PART_NUMBER: '5145212', UNPUNCTUATED: '5145212', '72582', '3', '2', '5', 'CX', 'A', '', '', FSC: 4140, PUBLICATION_DATE: 'AUG 2013' },
{ id: 65, NIIN 83, PART_NUMBER: 'L60456', UNPUNCTUATED: 'L60456', '10988', '3', '2', '5', 'PA', 'A', '', '', FSC: 5995, PUBLICATION_DATE: 'AUG 2013' },
{ id: 66, NIIN 84, PART_NUMBER: 'L60052', UNPUNCTUATED: 'L60052', '10988', '3', '2', '2', 'AX', 'A', '', '', FSC: 4720, PUBLICATION_DATE: 'AUG 2013' },
{ id: 67, NIIN 85, PART_NUMBER: '6752-001', UNPUNCTUATED: '6752001', '09990', '3', '2', '5', 'ZZ', 'A', '', '', FSC: 5330, PUBLICATION_DATE: 'AUG 2013' },
{ id: 68, NIIN 85, PART_NUMBER: '6752-001', UNPUNCTUATED: '6752001', '02249', '3', '9', '5', 'PA', 'A', '', '', FSC: 5330, PUBLICATION_DATE: 'AUG 2013' },
{ id: 69, NIIN 86, PART_NUMBER: 'J514', 'J514', UNPUNCTUATED: '81343', '5', '1', 'E', 'AX', 'A', '', '', FSC: 4730, PUBLICATION_DATE: 'AUG 2013' },
{ id: 70, NIIN 86, PART_NUMBER: '16-12 070123C', UNPUNCTUATED: '1612070123C', '81343', '3', '2', 'E', 'AX', 'A', '', '', FSC: 4730, PUBLICATION_DATE: 'AUG 2013' },
{ id: 71, NIIN 86, PART_NUMBER: '218-5050', UNPUNCTUATED: '2185050', '10988', '5', '2', '6', 'AX', 'A', '', '', FSC: 4730, PUBLICATION_DATE: 'AUG 2013' },
{ id: 72, NIIN 87, PART_NUMBER: '10293243', UNPUNCTUATED: '10293243', '18876', '3', '2', '1', 'BD', 'A', '', '', FSC: 5998, PUBLICATION_DATE: 'AUG 2013' },
{ id: 73, NIIN 88, PART_NUMBER: '11647745-1', UNPUNCTUATED: '116477451', '19207', '3', '2', '1', 'AZ', 'A', '', '', FSC: 2920, PUBLICATION_DATE: 'AUG 2013' },
{ id: 74, NIIN 90, PART_NUMBER: '439-7854-00', UNPUNCTUATED: '439785400', '12515', '5', '1', 'E', 'ZZ', 'A', '', '', FSC: 6145, PUBLICATION_DATE: 'AUG 2013' },
{ id: 75, NIIN 90, PART_NUMBER: '439-7854-00', UNPUNCTUATED: '439785400', '12814', '5', '1', 'E', 'ZZ', 'A', '', '', FSC: 6145, PUBLICATION_DATE: 'AUG 2013' },
{ id: 76, NIIN 90, PART_NUMBER: '439-7854-00', UNPUNCTUATED: '439785400', '16428', '5', '1', 'E', 'ZZ', 'A', '', '', FSC: 6145, PUBLICATION_DATE: 'AUG 2013' },
{ id: 77, NIIN 90, PART_NUMBER: '439-7854-00', UNPUNCTUATED: '439785400', '27478', '5', '1', 'E', 'ZZ', 'A', '', '', FSC: 6145, PUBLICATION_DATE: 'AUG 2013' },
{ id: 78, NIIN 90, PART_NUMBER: '439-7854-00', UNPUNCTUATED: '439785400', '28581', '5', '1', 'E', 'ZZ', 'A', '', '', FSC: 6145, PUBLICATION_DATE: 'AUG 2013' },
{ id: 79, NIIN 90, PART_NUMBER: '439-7854-00', UNPUNCTUATED: '439785400', '29868', '5', '1', 'E', 'ZZ', 'A', '', '', FSC: 6145, PUBLICATION_DATE: 'AUG 2013' },
{ id: 80, NIIN 90, PART_NUMBER: '439-7854-00', UNPUNCTUATED: '439785400', '03890', '5', '1', 'E', 'ZZ', 'A', '', '', FSC: 6145, PUBLICATION_DATE: 'AUG 2013' },
{ id: 81, NIIN 90, PART_NUMBER: '439-7854-00', UNPUNCTUATED: '439785400', '71124', '5', '1', 'E', 'ZZ', 'A', '', '', FSC: 6145, PUBLICATION_DATE: 'AUG 2013' },
{ id: 82, NIIN 90, PART_NUMBER: '439-7854-000', UNPUNCTUATED: '4397854000', '95105', '3', '2', '5', 'KZ', 'A', '', '', FSC: 6145, PUBLICATION_DATE: 'AUG 2013' },
{ id: 83, NIIN 90, PART_NUMBER: 'TE26-734CWS3', UNPUNCTUATED: 'TE26734CWS3', '05973', '3', '9', '5', '9Z', 'A', '', '', FSC: 6145, PUBLICATION_DATE: 'AUG 2013' },
{ id: 84, NIIN 90, PART_NUMBER: '439-7854-000', UNPUNCTUATED: '4397854000', '13499', '7', '2', '2', '9Z', 'A', '', '', FSC: 6145, PUBLICATION_DATE: 'AUG 2013' },
{ id: 85, NIIN 91, PART_NUMBER: '4X27D1', UNPUNCTUATED: '4X27D1', '98296', '3', '2', '2', '9Z', 'A', '', '', FSC: 3020, PUBLICATION_DATE: 'AUG 2013' },
{ id: 86, NIIN 92, PART_NUMBER: 'ACRYLOIDHF819', UNPUNCTUATED: 'ACRYLOIDHF819', '77902', '3', '2', '4', '9Z', 'A', '', '', FSC: 9150, PUBLICATION_DATE: 'AUG 2013' },
{ id: 87, NIIN 94, PART_NUMBER: 'HT4036-4-25', UNPUNCTUATED: 'HT4036425', '80539', '3', '2', '4', '9Z', 'A', '', '', FSC: 5305, PUBLICATION_DATE: 'AUG 2013' },
{ id: 88, NIIN 94, PART_NUMBER: 'HT4036-4-25', UNPUNCTUATED: 'HT4036425', '92215', '3', '2', '4', '9Z', 'A', '', '', FSC: 5305, PUBLICATION_DATE: 'AUG 2013' },
{ id: 89, NIIN 94, PART_NUMBER: 'HT4036-4-25', UNPUNCTUATED: 'HT4036425', '17446', '3', '2', '4', 'ZZ', 'A', '', '', FSC: 5305, PUBLICATION_DATE: 'AUG 2013' },
{ id: 90, NIIN 94, PART_NUMBER: 'HT4036-4-25', UNPUNCTUATED: 'HT4036425', 'C4293', '5', '2', '3', 'ZG', 'A', '', '', FSC: 5305, PUBLICATION_DATE: 'AUG 2013' },
{ id: 91, NIIN 94, PART_NUMBER: 'HT4036-4-25', UNPUNCTUATED: 'HT4036425', '56878', '5', '9', '4', '9Z', 'A', '', '', FSC: 5305, PUBLICATION_DATE: 'AUG 2013' },
{ id: 92, NIIN 94, PART_NUMBER: 'HT4036-4-25', UNPUNCTUATED: 'HT4036425', '97928', '5', '9', '5', 'ZZ', 'A', '', '', FSC: 5305, PUBLICATION_DATE: 'AUG 2013' },
{ id: 93, NIIN 96, PART_NUMBER: 'U14437', UNPUNCTUATED: 'U14437', 'D9182', 'C', '1', '6', 'ZZ', 'A', '', 'AC', FSC: 3830, PUBLICATION_DATE: 'AUG 2013' },
{ id: 94, NIIN 96, PART_NUMBER: '8003C', UNPUNCTUATED: '8003C', '21292', 'C', '1', '6', 'ZZ', 'A', '', 'AC', FSC: 3830, PUBLICATION_DATE: 'AUG 2013' },
{ id: 95, NIIN 96, PART_NUMBER: 'T3C', UNPUNCTUATED: 'T3C', '75160', '3', '2', '5', 'ZZ', 'A', '', '', FSC: 3830, PUBLICATION_DATE: 'AUG 2013' },
{ id: 96, NIIN 96, PART_NUMBER: 'U 14437', UNPUNCTUATED: 'U14437', '75160', '3', '9', '5', 'AX', 'A', '', '', FSC: 3830, PUBLICATION_DATE: 'AUG 2013' },
{ id: 97, NIIN 96, PART_NUMBER: 'U 14437', UNPUNCTUATED: 'U14437', '75755', '5', '9', '6', 'ZZ', 'A', '', '', FSC: 3830, PUBLICATION_DATE: 'AUG 2013' },
{ id: 98, NIIN 98, PART_NUMBER: '23049-21', UNPUNCTUATED: '2304921', '89565', '3', '2', '6', 'AX', 'A', '', '', FSC: 4520, PUBLICATION_DATE: 'AUG 2013' },
{ id: 99, NIIN 98, PART_NUMBER: '23049-21', UNPUNCTUATED: '2304921', '89564', '5', '9', '6', 'AX', 'A', '', '', FSC: 4520, PUBLICATION_DATE: 'AUG 2013' },
{ id: 100, NIIN: 100, PART_NUMBER: '28B135-129A', UNPUNCTUATED: '28B135129A', '83298', '3', '2', '5', 'KE', 'A', '', '', FSC: 6115, PUBLICATION_DATE: 'AUG 2013' },
{ id: 101, NIIN: 105, PART_NUMBER: '38680', UNPUNCTUATED: '38680', '59211', '5', '1', '5', 'ZZ', 'A', '', '', FSC: 1560, PUBLICATION_DATE: 'AUG 2013' },
{ id: 102, NIIN: 105, PART_NUMBER: '38680', UNPUNCTUATED: '38680', '99321', '3', '2', '5', 'KE', 'A', '', '', FSC: 1560, PUBLICATION_DATE: 'AUG 2013' },
{ id: 103, NIIN: 109, PART_NUMBER: '32G976002-1', UNPUNCTUATED: '32G9760021', '76301', '3', '2', '5', 'KE', 'A', '', '', FSC: 4010, PUBLICATION_DATE: 'AUG 2013' },
{ id: 104, NIIN: 112, PART_NUMBER: '5704833', UNPUNCTUATED: '5704833', '19207', '3', '2', '1', 'AZ', 'A', '', '', FSC: 5180, PUBLICATION_DATE: 'AUG 2013' },
{ id: 105, NIIN: 113, PART_NUMBER: '5704835', UNPUNCTUATED: '5704835', '19207', '3', '2', '1', 'AZ', 'A', '', '', FSC: 5180, PUBLICATION_DATE: 'AUG 2013' },
{ id: 106, NIIN: 114, PART_NUMBER: 'XM876', UNPUNCTUATED: 'XM876', '81349', '2', '2', '4', 'PA', 'A', '', '', FSC: 2320, PUBLICATION_DATE: 'AUG 2013' },
{ id: 107, NIIN: 114, PART_NUMBER: 'MIL-T-62225', UNPUNCTUATED: 'MILT62225', '81349', '4', '1', '4', 'PA', 'A', '', '', FSC: 2320, PUBLICATION_DATE: 'AUG 2013' },
{ id: 108, NIIN: 114, PART_NUMBER: 'XM876TACOM', UNPUNCTUATED: 'XM876TACOM', '19207', '5', '1', '4', 'AZ', 'A', '', '', FSC: 2320, PUBLICATION_DATE: 'AUG 2013' },
{ id: 109, NIIN: 115, PART_NUMBER: '205-070-651-79', UNPUNCTUATED: '20507065179', '97499', '3', '2', '1', 'CT', 'A', '', '', FSC: 7230, PUBLICATION_DATE: 'AUG 2013' },
{ id: 110, NIIN: 115, PART_NUMBER: '205-070-651-079', UNPUNCTUATED: '205070651079', '97499', '5', '2', '5', '9Z', 'A', '', '', FSC: 7230, PUBLICATION_DATE: 'AUG 2013' },
{ id: 111, NIIN: 117, PART_NUMBER: '128SCEC168-3', UNPUNCTUATED: '128SCEC1683', '26512', '1', '2', '5', 'KE', 'A', '', '', FSC: 5930, PUBLICATION_DATE: 'AUG 2013' },
{ id: 112, NIIN: 117, PART_NUMBER: '214C40-3-91', UNPUNCTUATED: '214C40391', '02750', '3', '2', '5', 'KE', 'A', '', '', FSC: 5930, PUBLICATION_DATE: 'AUG 2013' },
{ id: 113, NIIN: 118, PART_NUMBER: '672717-161', UNPUNCTUATED: '672717161', '98897', '1', '3', '1', 'KE', 'A', '', '', FSC: 6130, PUBLICATION_DATE: 'AUG 2013' },













    ])

    return queryInterface.bulkInsert('nsn', [
      { NIIN: 42, NAME: 'CK FILTER ASSEMBLY', INC: 77777, FSC: 8940, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 45, NAME: 'TERMINAL BOARD ASSEMBLY', INC: 08573, FSC: 5940, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 47, NAME: 'MODIFICATION KIT,AIRFRAME', INC: 39730, FSC: 1560, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 48, NAME: 'ENGINE,AIRCRAFT,TURBO-SHAFT', INC: 32600, FSC: 2840, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 49, NAME: 'MODIFICATION KIT,ENGINE', INC: 39733, FSC: 2840, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 50, NAME: 'COMPRESSOR UNIT,RECIPROCATING', 29301, 4310, 0, 0, 0, 'AUG 2013' },
      { NIIN: 51, NAME: 'ELECTRON TUBE', INC: 00001, FSC: 5960, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 57, NAME: 'CLOSER,DOOR', INC: 06689, FSC: 5340, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' }, INC:
      { NIIN: 58, NAME: 'CLOSER', INC: 06689, FSC: 5340, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 59, NAME: 'CLOSER,DOOR', INC: 06689, FSC: 5340, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 60, NAME: 'CLOSER,DOOR', INC: 06689, FSC: 5340, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 61, NAME: 'MACHINE GUN,7.62 MILLIMETER', INC: 21601, FSC: 1005, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 64, NAME: 'BUR,DENTAL,EXCAVATING', INC: 11393, FSC: 6520, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 65, NAME: 'SHIPPING AND STORAG', INC: 77777, FSC: 8140, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 67, NAME: 'CLOTH,TWILL', INC: 29987, FSC: 8305, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 68, NAME: 'COVER,ACCESS', INC: 29785, FSC: 5340, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 69, NAME: 'ELECTROSURGICAL APPARATUS', INC: 13904, FSC: 6515, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 70, NAME: 'CUP,MEDICINE', INC: 35484, FSC: 6530, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 71, NAME: 'EXCAVATOR,DENTAL', INC: 12998, FSC: 6520, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 75, NAME: 'ENGINE,DIESEL', 03751, INC: 2815, FSC: 0, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 'AUG 2013 PUBLICATION_DATE' },
      { NIIN: 77, NAME: 'NUT,PLAIN,ROUND', 15887, INC: 5310, FSC: 0, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 'AUG 2013 PUBLICATION_DATE' },
      { NIIN: 79, NAME: 'WASHER,FLAT', INC: 13393, FSC: 5310, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 80, NAME: 'HOSE ASSEMBLY,NONMETALLIC', INC: 20311, FSC: 4720, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 81, NAME: 'HOSE,NONMETALLIC', INC: 22670, FSC: 4720, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 82, NAME: 'IMPELLER,FAN,AXIAL', INC: 10087, FSC: 4140, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 83, NAME: 'WIRING HARNESS', INC: 00450, FSC: 5995, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 84, NAME: 'HOSE,PREFORMED', INC: 17271, FSC: 4720, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 85, NAME: 'RETAINER', 77777, INC: 5330, FSC: 0, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 'AUG 2013 PUBLICATION_DATE' },
      { NIIN: 86, NAME: 'REDUCER,TUBE', INC: 08506, FSC: 4730, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 87, NAME: 'CIRCUIT CARD ASSEMBLY', INC: 61638, FSC: 5998, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 88, NAME: 'INSTALLATION KIT,AL', INC: 77777, FSC: 2920, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 90, NAME: 'WIRE,ELECTRICAL', INC: 00798, FSC: 6145, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 91, NAME: 'GEAR,SPUR', INC: 05466, FSC: 3020, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 92, NAME: 'ADDITIVE,VISCOSITY', INC: 77777, FSC: 9150, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 94, NAME: 'SCREW,CLOSE TOLERANCE', INC: 29294, FSC: 5305, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 96, NAME: 'TOOTH,SURFACE RIPPING', INC: 28152, FSC: 3830, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 98, NAME: 'HEATING ELEMENT,ELECTRICAL,NONIM', INC: 29427, FSC: 4520, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 100, NAME: 'GENERATOR,ALTERNATING CURRENT', INC: 00781, FSC: 6115, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 105, NAME: 'CAP,FILLER OPENING', INC: 30128, FSC: 1560, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 109, NAME: 'WIRE ROPE ASSEMBLY,SINGLE LEG', INC: 09764, FSC: 4010, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 112, NAME: 'TOOL KIT,GENERAL MECHANIC\'S', INC: 34594, FSC: 5180, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 113, NAME: 'TOOL KIT,GENERAL MECHANIC\'S', INC: 34594, FSC: 5180, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 114, NAME: 'TRUCK,MAINTENANCE', INC: 15784, FSC: 2320, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 115, NAME: 'CURTAIN,BLACKOUT', INC: 60359, FSC: 7230, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 117, NAME: 'SWITCH,PRESSURE', INC: 00206, FSC: 5930, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 118, NAME: 'POWER SUPPLY', INC: 00740, FSC: 6130, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 120, NAME: 'MOUNTING BASE,ELECTRICAL EQUIPME', INC: 29923, FSC: 5975, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 121, NAME: 'CONTROL PANEL ASSEM', INC: 77777, FSC: 1270, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 122, NAME: 'ALTIMETER,PRESSURE', INC: 03386, FSC: 6610, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 123, NAME: 'POWER SUPPLY', INC: 00740, FSC: 6130, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 125, NAME: 'LEAD,ELECTRICAL', INC: 04581, FSC: 6150, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 126, NAME: 'CHASSIS,ELECTRICAL-ELECTRONIC EQ', INC: 38671, FSC: 5975, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 127, NAME: 'SERVOMECHANISM,HYDRAULIC/PNEUMAT', INC: 42241, FSC: 1650, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 129, NAME: 'SERVOVALVE,HYDRAULIC', INC: 61748, FSC: 1650, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 131, NAME: 'ROD,PISTON,LINEAR ACTUATING CYLI', INC: 61725, FSC: 1650, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 132, NAME: 'SEAT,HELICAL COMPRESSION SPRING', INC: 24328, FSC: 5340, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 133, NAME: 'X-RAY APPARATUS,RADIOGRAPHIC,IND', INC: 13192, FSC: 6635, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 136, NAME: 'RESISTOR NETWORK,FIXED,FILM', INC: 32068, FSC: 5905, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 137, NAME: 'STEAK SAUCE', INC: 40102, FSC: 8950, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 138, NAME: 'LAUNCHER,GRENADE,ARMAMENT SUBSYS', INC: 40741, FSC: 1055, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 139, NAME: 'NUTATOR,TRACKER', INC: 77777, FSC: 1430, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 140, NAME: 'SEAL,VISOR', INC: 77777, FSC: 8415, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 141, NAME: 'VISOR,HELMENT', INC: 77777, FSC: 8415, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 143, NAME: 'CUSHION,SEAT BOTTOM', INC: 77777, FSC: 1680, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 144, NAME: 'CUSHION,SEAT BACK', INC: 77777, FSC: 1680, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 145, NAME: 'FILTER ELEMENT,FLUID', INC: 32624, FSC: 4330, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 146, NAME: 'TRANSFORMER,POWER', INC: 32496, FSC: 5950, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 147, NAME: 'FILTER MEDIA,AIR CONDITIONING', INC: 32625, FSC: 4130, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 148, NAME: 'FILTER,BAND PASS', INC: 00209, FSC: 5915, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 149, NAME: 'CABLE ASSEMBLY', INC: 00782, FSC: 5995, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
      { NIIN: 150, NAME: 'RECTIFIER,SEMICONDUCTOR DEVICE,U', INC: 62108, FSC: 5961, FSG: 0, COUNTRY_CODE: 0, ITEM_NUMBER: 0, PUBLICATION_DATE 'AUG 2013' },
    ])
    
    

    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
