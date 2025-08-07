document.addEventListener('DOMContentLoaded', () => {
    const classSelector = document.getElementById('class-selector');
    const daySelector = document.getElementById('day-selector');
    const scheduleContainer = document.getElementById('schedule-container');

    const renderSchedule = () => {
        const selectedClass = classSelector.value;
        const selectedDay = daySelector.value;
        const classSchedule = scheduleData[selectedClass] ? scheduleData[selectedClass][selectedDay] : null;

        if (!classSchedule || classSchedule.length === 0) {
            scheduleContainer.innerHTML = '<p>Tidak ada jadwal untuk hari ini.</p>';
            return;
        }

        let htmlContent = `
            <table class="schedule-table">
                <thead>
                    <tr>
                        <th>Waktu</th>
                        <th>Kode</th>
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
                    <td>${item.code || '-'}</td>
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

    classSelector.addEventListener('change', renderSchedule);
    daySelector.addEventListener('change', renderSchedule);

    // Render jadwal hari pertama dan kelas pertama saat halaman dimuat
    renderSchedule();
});
