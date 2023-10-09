export function ContactForm() {
  return (
    <div>
      <div>Platzhalter Text</div>
      <div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">E-Mail</span>
          </label>
          <input
            type="email"
            className="input-bordered input w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text-alt">Bottom Left label</span>
          </label>
        </div>
        <textarea className="h-52 w-full" />
      </div>
    </div>
  );
}
