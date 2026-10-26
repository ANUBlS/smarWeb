/* DB.pas TDataSource. */
import { registerBuiltin } from '../env';
import { TComponent } from '../vcl/component';
import { invalidate } from '../ui';
import type { TDataSet } from './dataset';
import type { TField } from './fields';

export class TDataSource extends TComponent {
  AutoEdit = true;
  Enabled = true;
  protected _dataSet: TDataSet | null = null;

  get DataSet() { return this._dataSet; }
  set DataSet(ds: TDataSet | null) {
    this._dataSet?.dataSources?.delete(this);
    // a reference to a component that is not an (emulated) dataset — e.g. an unknown third-party
    // memory table — leaves the source unlinked, like a dataset that never opens
    this._dataSet = ds && (ds as any).dataSources ? ds : null;
    this._dataSet?.dataSources.add(this);
    invalidate();
  }
  get State() { return this._dataSet?.State ?? 'dsinactive'; }
  async Edit() { if (this.AutoEdit && this._dataSet && this._dataSet.State === 'dsbrowse') await this._dataSet.Edit(); }
  IsLinkedTo(ds: unknown) { return ds === this._dataSet; }

  async dataChanged(field: TField | null) {
    if (!this.Enabled) return;
    await this.fire('OnDataChange', this, field);
  }
  async stateChanged() { await this.fire('OnStateChange', this); }

  /** Write a value coming from a data-aware control. */
  async editField(field: TField, value: unknown) {
    const ds = this._dataSet;
    if (!ds) return;
    if (ds.State === 'dsbrowse') {
      if (!this.AutoEdit) return;
      await ds.Edit();
    }
    await this.fire('OnUpdateData', this);
    await field.setValue(value);
  }
}
registerBuiltin('TDataSource', TDataSource);
