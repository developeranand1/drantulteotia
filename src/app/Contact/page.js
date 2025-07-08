export const metadata = {
  title: 'Contact Us | BJP',
  description: 'Get in touch with the Bharatiya Janata Party.',
};

export default function Contact() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <img src="/bjp-logo-png.png" alt="BJP Logo" width="80" />
        <h1 className="mt-3 text-warning fw-bold">Contact Us</h1>
        <p className="text-muted">Reach out to the Bharatiya Janata Party for support, suggestions or to join us.</p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <form className="p-4 border rounded bg-light shadow-sm">
            <div className="mb-3">
              <label className="form-label fw-semibold">Name</label>
              <input type="text" className="form-control" placeholder="Your Full Name" />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Email</label>
              <input type="email" className="form-control" placeholder="your@email.com" />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Message</label>
              <textarea className="form-control" rows="5" placeholder="Write your message here..."></textarea>
            </div>

            <button type="submit" className="btn btn-warning w-100 text-white fw-bold">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
