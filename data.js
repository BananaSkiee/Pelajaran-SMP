const scheduleData = {
    '7.1': {
        'Senin': [
            { time: '07.00 - 07.35', code: '', subject: 'Upacara', teacher: '' },
            { time: '07.35 - 09.20', code: '2.b', subject: 'PPSC & IPS', teacher: 'Heris Mujiati, S.Pd.' },
            { time: '09.35 - 11.20', code: '5', subject: 'Matematika', teacher: 'Indah Masruroh, S.Pd.' },
            { time: '11.20 - 12.30', code: '15.a', subject: 'TIK & PJOK', teacher: 'Oktaftianus Gea' }
        ],
        'Selasa': [
            { time: '07.00 - 08.45', code: '11.a', subject: 'IPA', teacher: 'Heri Suryanto, S.Pd.' },
            { time: '08.45 - 09.20', code: '4', subject: 'Bahasa Inggris', teacher: 'Indah Masruroh, S.Pd.' },
            { time: '09.35 - 10.45', code: '13', subject: 'Bahasa Indonesia', teacher: 'Ali Susanto, M.MPd' },
            { time: '10.45 - 12.30', code: '12', subject: 'BK', teacher: 'Ummu Syarifah, S.Pd.' }
        ],
        'Rabu': [
            { time: '07.00 - 08.45', code: '15.b', subject: 'TIK & PJOK', teacher: 'Oktaftianus Gea' },
            { time: '08.45 - 10.10', code: '11.b', subject: 'IPA', teacher: 'Heri Suryanto, S.Pd.' },
            { time: '10.10 - 11.20', code: '3', subject: 'PPSC', teacher: 'D.Sumadinata, S.Pd.' },
            { time: '11.20 - 12.30', code: '14.a', subject: 'Seni Budaya', teacher: 'D.Sumadinata, S.Pd.' }
        ],
        'Kamis': [
            { time: '07.00 - 08.45', code: '2.a', subject: 'IPS & PPSC', teacher: 'Heris Mujiati, S.Pd.' },
            { time: '08.45 - 09.20', code: '16', subject: 'Prakarya', teacher: 'Lidia' },
            { time: '09.35 - 10.10', code: '11.b', subject: 'IPA', teacher: 'Heri Suryanto, S.Pd.' },
            { time: '10.10 - 11.20', code: '12', subject: 'BK', teacher: 'Ummu Syarifah, S.Pd.' },
            { time: '11.20 - 12.30', code: '5', subject: 'Matematika', teacher: 'Indah Masruroh, S.Pd.' }
        ],
        'Jumat': [
            { time: '07.00 - 07.35', code: '3', subject: 'Pramuka', teacher: 'D.Sumadinata, S.Pd.' },
            { time: '07.35 - 09.20', code: '13', subject: 'Bahasa Indonesia', teacher: 'Ali Susanto, M.MPd' },
            { time: '09.35 - 10.45', code: '10', subject: 'Bahasa Inggris', teacher: 'Indah Masruroh, S.Pd.' },
            { time: '10.45 - 11.20', code: '8.a', subject: 'PKN', teacher: 'Siti' },
            { time: '11.20 - 12.30', code: '6', subject: 'Pendidikan Agama', teacher: 'D.Sumadinata, S.Pd.' }
        ]
    },
    '7.2': {
        'Senin': [
            { time: '07.00 - 07.35', code: '', subject: 'Upacara', teacher: '' },
            { time: '07.35 - 09.20', code: '5', subject: 'Matematika', teacher: 'Indah Masruroh, S.Pd.' },
            { time: '09.35 - 10.45', code: '8.b', subject: 'PKN', teacher: 'Siti' },
            { time: '10.45 - 11.20', code: '11.a', subject: 'IPA', teacher: 'Heri Suryanto, S.Pd.' },
            { time: '11.20 - 12.30', code: '4', subject: 'Bahasa Inggris', teacher: 'Indah Masruroh, S.Pd.' }
        ],
        'Selasa': [
            { time: '07.00 - 08.45', code: '15.b', subject: 'TIK & PJOK', teacher: 'Oktaftianus Gea' },
            { time: '08.45 - 09.20', code: '12', subject: 'BK', teacher: 'Ummu Syarifah, S.Pd.' },
            { time: '09.35 - 10.45', code: '13', subject: 'Bahasa Indonesia', teacher: 'Ali Susanto, M.MPd' },
            { time: '10.45 - 12.30', code: '16', subject: 'Prakarya', teacher: 'Lidia' }
        ],
        'Rabu': [
            { time: '07.00 - 08.45', code: '6', subject: 'Pendidikan Agama', teacher: 'D.Sumadinata, S.Pd.' },
            { time: '08.45 - 10.10', code: '11.b', subject: 'IPA', teacher: 'Heri Suryanto, S.Pd.' },
            { time: '10.10 - 11.20', code: '3', subject: 'PPSC', teacher: 'D.Sumadinata, S.Pd.' },
            { time: '11.20 - 12.30', code: '14.a', subject: 'Seni Budaya', teacher: 'D.Sumadinata, S.Pd.' }
        ],
        'Kamis': [
            { time: '07.00 - 08.45', code: '2.a', subject: 'IPS & PPSC', teacher: 'Heris Mujiati, S.Pd.' },
            { time: '08.45 - 09.20', code: '11.b', subject: 'IPA', teacher: 'Heri Suryanto, S.Pd.' },
            { time: '09.35 - 10.10', code: '12', subject: 'BK', teacher: 'Ummu Syarifah, S.Pd.' },
            { time: '10.10 - 11.20', code: '5', subject: 'Matematika', teacher: 'Indah Masruroh, S.Pd.' },
            { time: '11.20 - 12.30', code: '13', subject: 'Bahasa Indonesia', teacher: 'Ali Susanto, M.MPd' }
        ],
        'Jumat': [
            { time: '07.00 - 07.35', code: '3', subject: 'Pramuka', teacher: 'D.Sumadinata, S.Pd.' },
            { time: '07.35 - 09.20', code: '10', subject: 'Bahasa Inggris', teacher: 'Indah Masruroh, S.Pd.' },
            { time: '09.35 - 10.45', code: '11.b', subject: 'IPA', teacher: 'Heri Suryanto, S.Pd.' },
            { time: '10.45 - 11.20', code: '8.a', subject: 'PKN', teacher: 'Siti' },
            { time: '11.20 - 12.30', code: '6', subject: 'Pendidikan Agama', teacher: 'D.Sumadinata, S.Pd.' }
        ]
    },
    '8.1': {
        'Senin': [
            { time: '07.00 - 07.35', code: '', subject: 'Upacara', teacher: '' },
            { time: '07.35 - 09.20', code: '15.b', subject: 'TIK & PJOK', teacher: 'Oktaftianus Gea' },
            { time: '09.35 - 10.10', code: '11.a', subject: 'IPA', teacher: 'Heri Suryanto, S.Pd.' },
            { time: '10.10 - 11.20', code: '4', subject: 'Bahasa Inggris', teacher: 'Indah Masruroh, S.Pd.' },
            { time: '11.20 - 12.30', code: '13', subject: 'Bahasa Indonesia', teacher: 'Ali Susanto, M.MPd' }
        ],
        'Selasa': [
            { time: '07.00 - 08.45', code: '12', subject: 'BK', teacher: 'Ummu Syarifah, S.Pd.' },
            { time: '08.45 - 09.20', code: '15.a', subject: 'TIK & PJOK', teacher: 'Oktaftianus Gea' },
            { time: '09.35 - 11.20', code: '3', subject: 'PPSC', teacher: 'D.Sumadinata, S.Pd.' },
            { time: '11.20 - 12.30', code: '10', subject: 'Matematika', teacher: 'Indah Masruroh, S.Pd.' }
        ],
        'Rabu': [
            { time: '07.00 - 08.45', code: '14.a', subject: 'Seni Budaya', teacher: 'D.Sumadinata, S.Pd.' },
            { time: '08.45 - 10.10', code: '3', subject: 'PPSC', teacher: 'D.Sumadinata, S.Pd.' },
            { time: '10.10 - 11.20', code: '11.b', subject: 'IPA', teacher: 'Heri Suryanto, S.Pd.' },
            { time: '11.20 - 12.30', code: '2.a', subject: 'IPS & PPSC', teacher: 'Heris Mujiati, S.Pd.' }
        ],
        'Kamis': [
            { time: '07.00 - 08.45', code: '11.b', subject: 'IPA', teacher: 'Heri Suryanto, S.Pd.' },
            { time: '08.45 - 09.20', code: '12', subject: 'BK', teacher: 'Ummu Syarifah, S.Pd.' },
            { time: '09.35 - 10.10', code: '5', subject: 'Matematika', teacher: 'Indah Masruroh, S.Pd.' },
            { time: '10.10 - 11.20', code: '15.a', subject: 'TIK & PJOK', teacher: 'Oktaftianus Gea' },
            { time: '11.20 - 12.30', code: '13', subject: 'Bahasa Indonesia', teacher: 'Ali Susanto, M.MPd' }
        ],
        'Jumat': [
            { time: '07.00 - 07.35', code: '3', subject: 'Pramuka', teacher: 'D.Sumadinata, S.Pd.' },
            { time: '07.35 - 09.20', code: '16', subject: 'Prakarya', teacher: 'Lidia' },
            { time: '09.35 - 10.45', code: '10', subject: 'Bahasa Inggris', teacher: 'Indah Masruroh, S.Pd.' },
            { time: '10.45 - 11.20', code: '8.a', subject: 'PKN', teacher: 'Siti' },
            { time: '11.20 - 12.30', code: '6', subject: 'Pendidikan Agama', teacher: 'D.Sumadinata, S.Pd.' }
        ]
    },
    '8.2': {
        'Senin': [
            { time: '07.00 - 07.35', code: '', subject: 'Upacara', teacher: '' },
            { time: '07.35 - 09.20', code: '12', subject: 'BK', teacher: 'Ummu Syarifah, S.Pd.' },
            { time: '09.35 - 10.10', code: '4', subject: 'Bahasa Inggris', teacher: 'Indah Masruroh, S.Pd.' },
            { time: '10.10 - 11.20', code: '13', subject: 'Bahasa Indonesia', teacher: 'Ali Susanto, M.MPd' },
            { time: '11.20 - 12.30', code: '10', subject: 'Matematika', teacher: 'Indah Masruroh, S.Pd.' }
        ],
        'Selasa': [
            { time: '07.00 - 08.45', code: '15.a', subject: 'TIK & PJOK', teacher: 'Oktaftianus Gea' },
            { time: '08.45 - 09.20', code: '5', subject: 'Matematika', teacher: 'Indah Masruroh, S.Pd.' },
            { time: '09.35 - 11.20', code: '11.b', subject: 'IPA', teacher: 'Heri Suryanto, S.Pd.' },
            { time: '11.20 - 12.30', code: '13', subject: 'Bahasa Indonesia', teacher: 'Ali Susanto, M.MPd' }
        ],
        'Rabu': [
            { time: '07.00 - 08.45', code: '14.a', subject: 'Seni Budaya', teacher: 'D.Sumadinata, S.Pd.' },
            { time: '08.45 - 10.10', code: '14.a', subject: 'Seni Budaya', teacher: 'D.Sumadinata, S.Pd.' },
            { time: '10.10 - 11.20', code: '10', subject: 'Matematika', teacher: 'Indah Masruroh, S.Pd.' },
            { time: '11.20 - 12.30', code: '2.a', subject: 'IPS & PPSC', teacher: 'Heris Mujiati, S.Pd.' }
        ],
        'Kamis': [
            { time: '07.00 - 08.45', code: '12', subject: 'BK', teacher: 'Ummu Syarifah, S.Pd.' },
            { time: '08.45 - 09.20', code: '15.b', subject: 'TIK & PJOK', teacher: 'Oktaftianus Gea' },
            { time: '09.35 - 10.10', code: '13', subject: 'Bahasa Indonesia', teacher: 'Ali Susanto, M.MPd' },
            { time: '10.10 - 11.20', code: '11.b', subject: 'IPA', teacher: 'Heri Suryanto, S.Pd.' },
            { time: '11.20 - 12.30', code: '5', subject: 'Matematika', teacher: 'Indah Masruroh, S.Pd.' }
        ],
        'Jumat': [
            { time: '07.00 - 07.35', code: '3', subject: 'Pramuka', teacher: 'D.Sumadinata, S.Pd.' },
            { time: '07.35 - 09.20', code: '16', subject: 'Prakarya', teacher: 'Lidia' },
            { time: '09.35 - 10.45', code: '10', subject: 'Bahasa Inggris', teacher: 'Indah Masruroh, S.Pd.' },
            { time: '10.45 - 11.20', code: '8.a', subject: 'PKN', teacher: 'Siti' },
            { time: '11.20 - 12.30', code: '6', subject: 'Pendidikan Agama', teacher: 'D.Sumadinata, S.Pd.' }
        ]
    },
    '9.1': {
        'Senin': [
            { time: '07.00 - 07.35', code: '', subject: 'Upacara', teacher: '' },
            { time: '07.35 - 09.20', code: '8.a', subject: 'PKN', teacher: 'Siti' },
            { time: '09.35 - 10.10', code: '13', subject: 'Bahasa Indonesia', teacher: 'Ali Susanto, M.MPd' },
            { time: '10.10 - 11.20', code: '12', subject: 'BK', teacher: 'Ummu Syarifah, S.Pd.' },
            { time: '11.20 - 12.30', code: '5', subject: 'Matematika', teacher: 'Indah Masruroh, S.Pd.' }
        ],
        'Selasa': [
            { time: '07.00 - 08.45', code: '15.a', subject: 'TIK & PJOK', teacher: 'Oktaftianus Gea' },
            { time: '08.45 - 09.20', code: '5', subject: 'Matematika', teacher: 'Indah Masruroh, S.Pd.' },
            { time: '09.35 - 11.20', code: '2.a', subject: 'IPS & PPSC', teacher: 'Heris Mujiati, S.Pd.' },
            { time: '11.20 - 12.30', code: '10', subject: 'Bahasa Inggris', teacher: 'Indah Masruroh, S.Pd.' }
        ],
        'Rabu': [
            { time: '07.00 - 08.45', code: '10', subject: 'Bahasa Inggris', teacher: 'Indah Masruroh, S.Pd.' },
            { time: '08.45 - 10.10', code: '8.a', subject: 'PKN', teacher: 'Siti' },
            { time: '10.10 - 11.20', code: '14.a', subject: 'Seni Budaya', teacher: 'D.Sumadinata, S.Pd.' },
            { time: '11.20 - 12.30', code: '11.b', subject: 'IPA', teacher: 'Heri Suryanto, S.Pd.' }
        ],
        'Kamis': [
            { time: '07.00 - 08.45', code: '16', subject: 'Prakarya', teacher: 'Lidia' },
            { time: '08.45 - 09.20', code: '12', subject: 'BK', teacher: 'Ummu Syarifah, S.Pd.' },
            { time: '09.35 - 10.10', code: '5', subject: 'Matematika', teacher: 'Indah Masruroh, S.Pd.' },
            { time: '10.10 - 11.20', code: '13', subject: 'Bahasa Indonesia', teacher: 'Ali Susanto, M.MPd' },
            { time: '11.20 - 12.30', code: '15.a', subject: 'TIK & PJOK', teacher: 'Oktaftianus Gea' }
        ],
        'Jumat': [
            { time: '07.00 - 07.35', code: '3', subject: 'Pramuka', teacher: 'D.Sumadinata, S.Pd.' },
            { time: '07.35 - 09.20', code: '2.a', subject: 'IPS & PPSC', teacher: 'Heris Mujiati, S.Pd.' },
            { time: '09.35 - 10.45', code: '11.b', subject: 'IPA', teacher: 'Heri Suryanto, S.Pd.' },
            { time: '10.45 - 11.20', code: '11.b', subject: 'IPA', teacher: 'Heri Suryanto, S.Pd.' },
            { time: '11.20 - 12.30', code: '6', subject: 'Pendidikan Agama', teacher: 'D.Sumadinata, S.Pd.' }
        ]
    },
    '9.2': {
        'Senin': [
            { time: '07.00 - 07.35', code: '', subject: 'Upacara', teacher: '' },
            { time: '07.35 - 09.20', code: '17', subject: 'Bahasa Inggris', teacher: 'Indah Masruroh, S.Pd.' },
            { time: '09.35 - 11.20', code: '15', subject: 'TIK & PJOK', teacher: 'Oktaftianus Gea' },
            { time: '11.20 - 12.30', code: '16', subject: 'BK', teacher: 'Ummu Syarifah, S.Pd.' }
        ],
        'Selasa': [
            { time: '07.00 - 08.45', code: '1', subject: 'Bahasa Indonesia', teacher: 'Ali Susanto, M.MPd' },
            { time: '08.45 - 09.20', code: '17', subject: 'Bahasa Inggris', teacher: 'Indah Masruroh, S.Pd.' },
            { time: '09.35 - 11.20', code: '3', subject: 'PPSC', teacher: 'D.Sumadinata, S.Pd.' },
            { time: '11.20 - 12.30', code: '17', subject: 'Matematika', teacher: 'Indah Masruroh, S.Pd.' }
        ],
        'Rabu': [
            { time: '07.00 - 08.45', code: '1', subject: 'Bahasa Indonesia', teacher: 'Ali Susanto, M.MPd' },
            { time: '08.45 - 10.10', code: '17', subject: 'Matematika', teacher: 'Indah Masruroh, S.Pd.' },
            { time: '10.10 - 11.20', code: '3', subject: 'PPSC', teacher: 'D.Sumadinata, S.Pd.' },
            { time: '11.20 - 12.30', code: '17', subject: 'Bahasa Inggris', teacher: 'Indah Masruroh, S.Pd.' }
        ],
        'Kamis': [
            { time: '07.00 - 08.45', code: '11', subject: 'IPA', teacher: 'Heri Suryanto, S.Pd.' },
            { time: '08.45 - 09.20', code: '2', subject: 'IPS & PPSC', teacher: 'Heris Mujiati, S.Pd.' },
            { time: '09.35 - 10.10', code: '11', subject: 'IPA', teacher: 'Heri Suryanto, S.Pd.' },
            { time: '10.10 - 11.20', code: '17', subject: 'Bahasa Inggris', teacher: 'Indah Masruroh, S.Pd.' },
            { time: '11.20 - 12.30', code: '11', subject: 'IPA', teacher: 'Heri Suryanto, S.Pd.' }
        ],
        'Jumat': [
            { time: '07.00 - 07.35', code: '3', subject: 'Pramuka', teacher: 'D.Sumadinata, S.Pd.' },
            { time: '07.35 - 09.20', code: '2', subject: 'IPS & PPSC', teacher: 'Heris Mujiati, S.Pd.' },
            { time: '09.35 - 10.45', code: '2', subject: 'IPS & PPSC', teacher: 'Heris Mujiati, S.Pd.' },
            { time: '10.45 - 11.20', code: '11', subject: 'IPA', teacher: 'Heri Suryanto, S.Pd.' },
            { time: '11.20 - 12.30', code: '1', subject: 'Bahasa Indonesia', teacher: 'Ali Susanto, M.MPd' }
        ]
    }
};
             
