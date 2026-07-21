import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { SLIDES_DATA } from '../data/slidesData';

export async function generateSyllabusPdf(onProgress) {
  // Create an off-screen container styled for printing A4 PDF
  const pdfContainer = document.createElement('div');
  pdfContainer.id = 'pdf-syllabus-container';
  pdfContainer.style.position = 'absolute';
  pdfContainer.style.left = '-9999px';
  pdfContainer.style.top = '0';
  pdfContainer.style.width = '800px';
  pdfContainer.style.backgroundColor = '#0b0f19';
  pdfContainer.style.color = '#e2e8f0';
  pdfContainer.style.fontFamily = "'Vazirmatn', sans-serif";
  pdfContainer.style.direction = 'rtl';
  pdfContainer.style.padding = '40px';

  // Populate container HTML with high quality Persian typography
  pdfContainer.innerHTML = `
    <div style="border: 2px solid rgba(56, 189, 248, 0.4); border-radius: 20px; padding: 30px; background: rgba(15, 23, 42, 0.95); box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
      
      <!-- Header -->
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid rgba(56, 189, 248, 0.3); padding-bottom: 20px; margin-bottom: 25px;">
        <div>
          <div style="font-size: 12px; color: #38bdf8; font-weight: bold; font-family: monospace;">۶ ساعت کارگاه عملی • ۲۱ ماژول تخصصی</div>
          <h1 style="font-size: 26px; font-weight: 900; color: #f8fafc; margin: 6px 0 0 0;">مهندسی هوش مصنوعی & توسعه ایجنتیک</h1>
          <p style="font-size: 13px; color: #94a3b8; margin: 4px 0 0 0;">سرفصل‌های رسمی کارگاه آموزشی و مسترکلاس توسعه کُد با AI</p>
        </div>
        <div style="text-align: left; direction: ltr;">
          <div style="background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.3); padding: 8px 14px; border-radius: 12px; font-size: 12px; color: #38bdf8; font-weight: bold;">
            Instructor: Vahid Shahparifard
          </div>
          <div style="font-size: 11px; color: #64748b; margin-top: 4px;">مدرس: وحید شهپری فرد</div>
        </div>
      </div>

      <!-- Workshop Metadata Grid -->
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 25px;">
        <div style="background: rgba(30, 41, 59, 0.7); padding: 12px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08);">
          <span style="font-size: 11px; color: #94a3b8; display: block;">مدت زمان کارگاه</span>
          <strong style="font-size: 14px; color: #38bdf8;">۶ ساعت کامل آموزشی</strong>
        </div>
        <div style="background: rgba(30, 41, 59, 0.7); padding: 12px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08);">
          <span style="font-size: 11px; color: #94a3b8; display: block;">تعداد سرفصل‌ها</span>
          <strong style="font-size: 14px; color: #38bdf8;">۲۱ اسلاید تخصصی</strong>
        </div>
        <div style="background: rgba(30, 41, 59, 0.7); padding: 12px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08);">
          <span style="font-size: 11px; color: #94a3b8; display: block;">سطح دوره</span>
          <strong style="font-size: 14px; color: #38bdf8;">پیشرفته و عملیاتی</strong>
        </div>
      </div>

      <!-- Syllabus Catalog List -->
      <h2 style="font-size: 18px; font-weight: 800; color: #38bdf8; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; margin-bottom: 16px;">
        فهرست کامل ۲۱ سرفصل آموزشی کارگاه:
      </h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-bottom: 25px;">
        ${SLIDES_DATA.map(slide => `
          <div style="background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(255,255,255,0.08); padding: 10px 12px; border-radius: 10px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
              <span style="font-size: 10px; font-weight: bold; color: #38bdf8; background: rgba(56, 189, 248, 0.15); padding: 2px 6px; border-radius: 4px; font-family: monospace;">اسلاید ${slide.number}</span>
              <span style="font-size: 10px; color: #94a3b8;">${slide.hour}</span>
            </div>
            <h4 style="font-size: 12px; font-weight: bold; color: #f1f5f9; margin: 0 0 2px 0;">${slide.title}</h4>
            <p style="font-size: 10px; color: #94a3b8; margin: 0; line-height: 1.4;">${slide.subtitle}</p>
          </div>
        `).join('')}
      </div>

      <!-- Mastered Tech Stack -->
      <div style="background: rgba(30, 41, 59, 0.8); border: 1px solid rgba(56, 189, 248, 0.2); padding: 16px; border-radius: 12px; margin-bottom: 20px;">
        <h3 style="font-size: 14px; font-weight: 800; color: #f8fafc; margin: 0 0 8px 0;">پشته فناوری مورد آموزش در کارگاه:</h3>
        <p style="font-size: 11px; color: #cbd5e1; margin: 0; line-height: 1.6;">
          Google Gemini 1.5/3.6 Pro & Flash • Claude Code & Claude 3.5 Sonnet • Antigravity CLI & Agentic IDE • GitHub Copilot & OpenAI Codex • NotebookLM & Google AI Studio • Vector DBs (Qdrant, Pinecone) • RAG Architecture • Multi-Agent ReAct Loops • Python & FastAPI
        </p>
      </div>

      <!-- Footer -->
      <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 12px; display: flex; justify-content: space-between; font-size: 11px; color: #64748b;">
        <span>مدرس: وحید شهپری فرد (Vahid Shahparifard)</span>
        <span>کد سورس گیت‌هاب: github.com/vshahparifard-cloud/kargah_hushe_masnuee</span>
      </div>

    </div>
  `;

  document.body.appendChild(pdfContainer);

  try {
    if (onProgress) onProgress(true);

    const canvas = await html2canvas(pdfContainer, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#0b0f19'
    });

    const imgData = canvas.toDataURL('image/jpeg', 0.95);
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('Syllabus_AI_Engineering_Vahid_Shahparifard.pdf');

  } catch (error) {
    console.error('PDF Generation failed:', error);
  } finally {
    document.body.removeChild(pdfContainer);
    if (onProgress) onProgress(false);
  }
}
