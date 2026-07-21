import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { SLIDES_DATA } from '../data/slidesData';

export async function generateSyllabusPdf(onProgress) {
  if (onProgress) onProgress(true);

  // Split slides into 2 pages: 1..11 on Page 1, 12..21 on Page 2
  const page1Slides = SLIDES_DATA.slice(0, 11);
  const page2Slides = SLIDES_DATA.slice(11);

  // Helper to create an A4 page element (794px x 1123px)
  const createPageElement = (htmlContent) => {
    const pageEl = document.createElement('div');
    pageEl.style.width = '794px';
    pageEl.style.height = '1123px';
    pageEl.style.backgroundColor = '#0b0f19';
    pageEl.style.color = '#e2e8f0';
    pageEl.style.fontFamily = "'Vazirmatn', sans-serif";
    pageEl.style.direction = 'rtl';
    pageEl.style.padding = '35px';
    pageEl.style.boxSizing = 'border-box';
    pageEl.style.position = 'absolute';
    pageEl.style.left = '-9999px';
    pageEl.style.top = '0';
    pageEl.innerHTML = htmlContent;
    return pageEl;
  };

  // Page 1 HTML
  const page1Html = `
    <div style="height: 100%; border: 2px solid rgba(56, 189, 248, 0.4); border-radius: 20px; padding: 25px; background: rgba(15, 23, 42, 0.95); box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between;">
      
      <div>
        <!-- Header -->
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid rgba(56, 189, 248, 0.3); padding-bottom: 16px; margin-bottom: 20px;">
          <div>
            <div style="font-size: 11px; color: #38bdf8; font-weight: bold; font-family: monospace;">۶ ساعت کارگاه عملی • ۲۱ ماژول تخصصی (صفحه ۱ از ۲)</div>
            <h1 style="font-size: 24px; font-weight: 900; color: #f8fafc; margin: 4px 0 0 0;">مهندسی هوش مصنوعی & توسعه ایجنتیک</h1>
            <p style="font-size: 12px; color: #94a3b8; margin: 2px 0 0 0;">سرفصل‌های رسمی کارگاه آموزشی و مسترکلاس توسعه کُد با AI</p>
          </div>
          <div style="text-align: left; direction: ltr;">
            <div style="background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.3); padding: 6px 12px; border-radius: 10px; font-size: 11px; color: #38bdf8; font-weight: bold;">
              Instructor: Vahid Shahparifard
            </div>
            <div style="font-size: 11px; color: #94a3b8; margin-top: 4px; font-weight: bold;">مدرس: وحید شهپری فرد</div>
          </div>
        </div>

        <!-- Metadata Grid -->
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 20px;">
          <div style="background: rgba(30, 41, 59, 0.7); padding: 10px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.08);">
            <span style="font-size: 10px; color: #94a3b8; display: block;">مدت زمان کارگاه</span>
            <strong style="font-size: 12px; color: #38bdf8;">۶ ساعت کامل آموزشی</strong>
          </div>
          <div style="background: rgba(30, 41, 59, 0.7); padding: 10px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.08);">
            <span style="font-size: 10px; color: #94a3b8; display: block;">تعداد سرفصل‌ها</span>
            <strong style="font-size: 12px; color: #38bdf8;">۲۱ اسلاید تخصصی</strong>
          </div>
          <div style="background: rgba(30, 41, 59, 0.7); padding: 10px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.08);">
            <span style="font-size: 10px; color: #94a3b8; display: block;">سطح دوره</span>
            <strong style="font-size: 12px; color: #38bdf8;">پیشرفته و عملیاتی</strong>
          </div>
        </div>

        <!-- Section Title -->
        <h2 style="font-size: 15px; font-weight: 800; color: #38bdf8; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 6px; margin-bottom: 14px;">
          بخش اول سرفصل‌ها (ماژول‌های ۰۱ تا ۱۱):
        </h2>

        <!-- Page 1 Modules Grid -->
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px;">
          ${page1Slides.map(slide => `
            <div style="background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(255,255,255,0.08); padding: 8px 10px; border-radius: 8px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
                <span style="font-size: 9px; font-weight: bold; color: #38bdf8; background: rgba(56, 189, 248, 0.15); padding: 1px 5px; border-radius: 4px; font-family: monospace;">اسلاید ${slide.number}</span>
                <span style="font-size: 9px; color: #94a3b8;">${slide.hour}</span>
              </div>
              <h4 style="font-size: 11px; font-weight: bold; color: #f1f5f9; margin: 0 0 2px 0;">${slide.title}</h4>
              <p style="font-size: 9.5px; color: #94a3b8; margin: 0; line-height: 1.35;">${slide.subtitle}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Footer Page 1 -->
      <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px; display: flex; justify-content: space-between; font-size: 10px; color: #64748b;">
        <span>کارگاه مهندسی هوش مصنوعی - مدرس: وحید شهپری فرد</span>
        <span>ادامه در صفحه ۲ ➔</span>
      </div>

    </div>
  `;

  // Page 2 HTML
  const page2Html = `
    <div style="height: 100%; border: 2px solid rgba(56, 189, 248, 0.4); border-radius: 20px; padding: 25px; background: rgba(15, 23, 42, 0.95); box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between;">
      
      <div>
        <!-- Header Page 2 -->
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid rgba(56, 189, 248, 0.3); padding-bottom: 14px; margin-bottom: 18px;">
          <div>
            <div style="font-size: 11px; color: #38bdf8; font-weight: bold; font-family: monospace;">۶ ساعت کارگاه عملی • ۲۱ ماژول تخصصی (صفحه ۲ از ۲)</div>
            <h1 style="font-size: 20px; font-weight: 900; color: #f8fafc; margin: 2px 0 0 0;">سرفصل‌های تکمیلی & پشته فناوری کارگاه</h1>
          </div>
          <div style="font-size: 11px; color: #38bdf8; font-weight: bold; direction: ltr;">
            Instructor: Vahid Shahparifard
          </div>
        </div>

        <!-- Section Title -->
        <h2 style="font-size: 15px; font-weight: 800; color: #38bdf8; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 6px; margin-bottom: 14px;">
          بخش دوم سرفصل‌ها (ماژول‌های ۱۲ تا ۲۱):
        </h2>

        <!-- Page 2 Modules Grid -->
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; margin-bottom: 20px;">
          ${page2Slides.map(slide => `
            <div style="background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(255,255,255,0.08); padding: 8px 10px; border-radius: 8px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
                <span style="font-size: 9px; font-weight: bold; color: #38bdf8; background: rgba(56, 189, 248, 0.15); padding: 1px 5px; border-radius: 4px; font-family: monospace;">اسلاید ${slide.number}</span>
                <span style="font-size: 9px; color: #94a3b8;">${slide.hour}</span>
              </div>
              <h4 style="font-size: 11px; font-weight: bold; color: #f1f5f9; margin: 0 0 2px 0;">${slide.title}</h4>
              <p style="font-size: 9.5px; color: #94a3b8; margin: 0; line-height: 1.35;">${slide.subtitle}</p>
            </div>
          `).join('')}
        </div>

        <!-- Mastered Tech Stack Summary Card -->
        <div style="background: rgba(30, 41, 59, 0.8); border: 1px solid rgba(56, 189, 248, 0.3); padding: 14px; border-radius: 12px; margin-bottom: 16px;">
          <h3 style="font-size: 13px; font-weight: 800; color: #f8fafc; margin: 0 0 6px 0;">پشته فناوری و ابزارهای مورد تدریس در کارگاه:</h3>
          <p style="font-size: 10.5px; color: #cbd5e1; margin: 0; line-height: 1.6;">
            Google Gemini 1.5/3.6 Pro & Flash • Claude Code & Claude 3.5 Sonnet • Antigravity CLI & Agentic IDE • GitHub Copilot & OpenAI Codex • NotebookLM & Google AI Studio • Vector DBs (Qdrant, Pinecone) • RAG Architecture • Multi-Agent ReAct Loops • Python & FastAPI
          </p>
        </div>
      </div>

      <!-- Footer Page 2 -->
      <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px; display: flex; justify-content: space-between; font-size: 10px; color: #64748b;">
        <span>مدرس: وحید شهپری فرد (Vahid Shahparifard)</span>
        <span>مخزن رسمی گیت‌هاب: github.com/vshahparifard-cloud/kargah_hushe_masnuee</span>
      </div>

    </div>
  `;

  const page1El = createPageElement(page1Html);
  const page2El = createPageElement(page2Html);

  document.body.appendChild(page1El);
  document.body.appendChild(page2El);

  try {
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    // Capture Page 1
    const canvas1 = await html2canvas(page1El, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#0b0f19'
    });
    const imgData1 = canvas1.toDataURL('image/jpeg', 0.95);
    pdf.addImage(imgData1, 'JPEG', 0, 0, 210, 297);

    // Capture Page 2
    pdf.addPage();
    const canvas2 = await html2canvas(page2El, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#0b0f19'
    });
    const imgData2 = canvas2.toDataURL('image/jpeg', 0.95);
    pdf.addImage(imgData2, 'JPEG', 0, 0, 210, 297);

    pdf.save('Syllabus_AI_Engineering_Vahid_Shahparifard.pdf');

  } catch (error) {
    console.error('PDF Generation failed:', error);
  } finally {
    document.body.removeChild(page1El);
    document.body.removeChild(page2El);
    if (onProgress) onProgress(false);
  }
}
