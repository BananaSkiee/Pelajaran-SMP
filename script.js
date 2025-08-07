document.addEventListener('DOMContentLoaded', () => {
    const daySelector = document.getElementById('day-selector');
    const scheduleContainer = document.getElementById('schedule-container');

    const renderSchedule = (day) => {
        const classSchedule = scheduleData['9.2'][day];
        if (!classSchedule) {
            scheduleContainer.innerHTML = '<p>Tidak ada jadwal untuk hari ini.</p>';
            return;
        }

        let htmlContent = `
            <table class="schedule-table">
                <thead>
                    <tr>
                        <th>Waktu</th>
                        <th>Mata Pelajaran</th>
                        <th>Guru</th>
                    </tr>
                </thead>
                <tbody>
        `;

        classSchedule.forEach(item => {
            htmlContent += `
                <tr>
                    <td>${item.time}</td>
                    <td class="subject-cell">${item.subject}</td>
                    <td class="teacher-cell">${item.teacher || '-'}</td>
                </tr>
            `;
        });

        htmlContent += `
                </tbody>
            </table>
        `;
        scheduleContainer.innerHTML = htmlContent;
    };

    daySelector.addEventListener('change', (event) => {
        renderSchedule(event.target.value);
    });

    // Render jadwal hari pertama saat halaman dimuat
    renderSchedule(daySelector.value);
});
